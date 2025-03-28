// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title FreelancerEscrow
 * @dev A smart contract to manage freelancer jobs using ERC20 tokens (USDC/USDT).
 *      Clients deposit funds before job creation, freelancers complete jobs,
 *      and payments are released upon client approval.
 */
contract FreelancerEscrow is ReentrancyGuard {
    IERC20 public token; // ERC20 token used for payments (USDC/USDT)

    // Prevents accidental Ether deposits
    receive() external payable {
        revert("Contract does not accept Ether");
    }

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    struct Client {
        address walletAddress;
        bool isRegistered;
    }

    struct Freelancer {
        string name;
        address walletAddress;
        bool isRegistered;
    }

    struct Job {
        address client;
        string description;
        uint256 amount;
        address assignedFreelancer;
        bool isCompleted;
        bool isPaidOut;
        uint256 deadline;
        bool clientApproved;
    }

    mapping(address => Client) public clients;
    mapping(address => Freelancer) public freelancers;
    mapping(uint256 => Job) public jobs;
    uint256 public jobCounter;

    /** Events for frontend tracking */
    event ClientRegistered(address indexed client);
    event FreelancerRegistered(address indexed freelancer, string name);
    event JobPosted(uint256 indexed jobId, address indexed client, string description, uint256 amount);
    event JobCancelled(uint256 indexed jobId, address indexed client);
    event FreelancerAssigned(uint256 indexed jobId, address indexed freelancer);
    event JobCompleted(uint256 indexed jobId);
    event PaymentReleased(uint256 indexed jobId, address indexed freelancer, uint256 amount);
    event DisputeResolved(uint256 indexed jobId, bool clientWins);

    /**
     * @notice Registers a client in the system.
     */
    function registerClient() external {
        require(!clients[msg.sender].isRegistered, "Client already registered");
        clients[msg.sender] = Client({walletAddress: msg.sender, isRegistered: true});
        emit ClientRegistered(msg.sender);
    }

    /**
     * @notice Registers a freelancer with a name.
     */
    function registerFreelancer(string memory _name) external {
        require(!freelancers[msg.sender].isRegistered, "Freelancer already registered");
        freelancers[msg.sender] = Freelancer({name: _name, walletAddress: msg.sender, isRegistered: true});
        emit FreelancerRegistered(msg.sender, _name);
    }

    /**
     * @notice Client posts a job and deposits payment in escrow.
     */
    function postJob(string memory _description, uint256 _amount, uint256 _deadline) external nonReentrant {
        require(clients[msg.sender].isRegistered, "Only registered clients can post jobs");
        require(_amount > 0, "Amount must be greater than zero");
        require(_deadline > block.timestamp, "Invalid deadline");
        require(token.transferFrom(msg.sender, address(this), _amount), "Token transfer failed");

        jobs[jobCounter] = Job({
            client: msg.sender,
            description: _description,
            amount: _amount,
            assignedFreelancer: address(0),
            isCompleted: false,
            isPaidOut: false,
            deadline: _deadline,
            clientApproved: false
        });
        emit JobPosted(jobCounter, msg.sender, _description, _amount);
        jobCounter++;
    }

    /**
     * @notice Client assigns a freelancer to the job.
     */
    function assignFreelancer(uint256 _jobId, address _freelancer) external {
        Job storage job = jobs[_jobId];
        require(msg.sender == job.client, "Only client can assign freelancer");
        require(freelancers[_freelancer].isRegistered, "Freelancer not registered");
        require(job.assignedFreelancer == address(0), "Freelancer already assigned");

        job.assignedFreelancer = _freelancer;
        emit FreelancerAssigned(_jobId, _freelancer);
    }

    /**
     * @notice Freelancer marks job as completed. Client must approve before payment is released.
     */
    function completeJob(uint256 _jobId) external {
        Job storage job = jobs[_jobId];
        require(msg.sender == job.assignedFreelancer, "Only assigned freelancer can complete job");
        require(!job.isCompleted, "Job already completed");
        job.isCompleted = true;
        emit JobCompleted(_jobId);
    }

    /**
     * @notice Client approves job completion.
     */
    function approveCompletion(uint256 _jobId) external nonReentrant {
        Job storage job = jobs[_jobId];
        require(msg.sender == job.client, "Only client can approve completion");
        require(job.isCompleted, "Job not completed yet");
        job.clientApproved = true;
    }

    /**
     * @notice Releases payment to freelancer after client approval.
     */
    function releasePayment(uint256 _jobId) external nonReentrant {
        Job storage job = jobs[_jobId];
        require(job.clientApproved, "Client has not approved completion");
        require(!job.isPaidOut, "Payment already released");

        job.isPaidOut = true;
        require(token.transfer(job.assignedFreelancer, job.amount), "Token transfer failed");
        emit PaymentReleased(_jobId, job.assignedFreelancer, job.amount);
    }

    /**
     * @notice Resolves disputes if job is not completed before the deadline.
     */
    function resolveDispute(uint256 _jobId) external nonReentrant {
        Job storage job = jobs[_jobId];
        require(block.timestamp > job.deadline, "Job deadline not reached yet");
        require(!job.isPaidOut, "Payment already released");
        
        bool clientWins = !job.isCompleted;
        job.isPaidOut = true;
        
        if (clientWins) {
            require(token.transfer(job.client, job.amount), "Refund failed");
        } else {
            require(token.transfer(job.assignedFreelancer, job.amount), "Payment failed");
        }
        
        emit DisputeResolved(_jobId, clientWins);
    }

    /**
     * @notice Prevents accidental ETH transfers.
     */
    fallback() external payable {
        revert("This contract does not accept ETH");
    }
}

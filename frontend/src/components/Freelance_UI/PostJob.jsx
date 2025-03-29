// ####################################################################
// ####################################################################

// 2. PostJob.js - Allows Clients to Post Jobs

// import React, { useState } from "react";
// import { ethers } from "ethers";

// const PostJob = ({ contract }) => {
//   const [title, setTitle] = useState("");
//   const [budget, setBudget] = useState("");
//   const [deadline, setDeadline] = useState("");

//   const postJob = async () => {
//     const tx = await contract.postJob(title, budget, deadline);
//     await tx.wait();
//     alert("Job Posted!");
//   };

//   return (
//     <div className="border border-1 p-2 m-4 rounded-md">
//       <h4>Post a Job</h4>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Job Title"
//       />
//       <input
//         type="number"
//         value={budget}
//         onChange={(e) => setBudget(e.target.value)}
//         placeholder="Budget"
//       />
//       <input
//         type="date"
//         value={deadline}
//         onChange={(e) => setDeadline(e.target.value)}
//       />
//       <button className="border border-1 rounded-md p-2" onClick={postJob}>
//         Post Job
//       </button>
//     </div>
//   );
// };

// export default PostJob;

import React, { useState } from "react";
import { ethers } from "ethers";
import ERC20_ABI from "./contractDetails/ERC20_ABI.json"; // Import ERC20 ABI

const PostJob = ({ contract, tokenAddress }) => {
  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [loading, setLoading] = useState(false);

  const postJob = async () => {
    if (!contract) {
      alert("Contract not initialized");
      return;
    }

    try {
      setLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Get the user's wallet address
      const userAddress = await signer.getAddress();

      // Get ERC-20 token contract instance
      const tokenContract = new ethers.Contract(
        tokenAddress,
        ERC20_ABI,
        signer
      );

      // Convert budget to correct decimal format (assuming USDC/USDT has 6 decimals)
      const parsedBudget = ethers.utils.parseUnits(budget, 6);

      // Approve the escrow contract to spend tokens on behalf of the user
      const approvalTx = await tokenContract.approve(
        contract.address,
        parsedBudget
      );
      await approvalTx.wait();
      console.log("Token spending approved");

      // Post the job after approval
      const tx = await contract.postJob(title, parsedBudget, deadline);
      await tx.wait();
      alert("Job Posted!");
    } catch (error) {
      console.error(error);
      alert("Failed to post job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-1 p-2 m-4 rounded-md">
      <h4>Post a Job</h4>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Job Title"
      />
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Budget (USDC/USDT)"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button
        className="border border-1 rounded-md p-2"
        onClick={postJob}
        disabled={loading}
      >
        {loading ? "Posting..." : "Post Job"}
      </button>
    </div>
  );
};

export default PostJob;

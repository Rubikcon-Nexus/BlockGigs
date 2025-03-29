// import Register from "./register";
import { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import { BrowserProvider } from "ethers";
import ConnectWallet from "./ConnectWallet";
import AddFreelancer from "./AddFreelancer";
import PostJob from "./PostJob";
import ApproveMilestone from "./ApproveMilestone";
import CompleteJob from "./CompleteJob";
import Register from "./Register";
import AssignFreelancer from "./AssignFreelancer";
import ReleasePayment from "./ReleasePayment";
import ResolveDispute from "./ResolveDispute";
import ApproveSpending from "./ApproveSpending";
import ClientApproveCompletion from "./ClientApproveCompletion";

import CONTRACT_ABI from "./contractDetails/contractABI.json";
const CONTRACT_ADDRESS = "0xF6cc533Fc1381B9F68E621D8476e73d8CbDBB27B";
const USDC_TOKEN_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

function FreelancePage() {
  const [signer, setSigner] = useState(null);
  // Add providers
  const [provider, setProvider] = useState(null);
  // Set contract State
  const [contract, setContract] = useState(null);
  // Set address
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (signer) {
      const instance = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );
      setContract(instance);
    }
  }, [signer]);

  return (
    <div className="p-6">
      <h1>Freelancer Escrow</h1>
      {/* 1 */}
      <ConnectWallet
        setProvider={setProvider}
        setSigner={setSigner}
        setAddress={setAddress}
      />
      {/* 2 */}
      <Register contract={contract} address={address} />
      {/*  3*/}
      {/* {contract && <ApproveSpending />} */}
      {/* 4 */}
      {contract && <PostJob contract={USDC_TOKEN_ADDRESS} />}
      {/* 5 */}
      {/* {contract && <AssignFreelancer contract={contract} />} */}
      {/* 6 */}
      {/* {contract && <CompleteJob />} */}
      {/* 7 */}
      {/* {contract && <ClientApproveCompletion />} */}
      {/* 8 */}
      {/* {contract && <ReleasePayment contract={contract} />} */}
      {/* 9 */}
      {/* {contract && <ResolveDispute />} */}
    </div>
  );
}

export default FreelancePage;

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

import CONTRACT_ABI from "./contractDetails/contractABI.json";
const CONTRACT_ADDRESS = "0xbC66956Dd11EFbB01296107A23AfA3635d192035";

function FreelancePage() {
  const [signer, setSigner] = useState(null);
  // Add providers
  const [provider, setProvider] = useState(null);
  // Set contract State
  const [contract, setContract] = useState(null);
  // Set address
  const [address, setAddress] = useState("");

  const _contract = signer
    ? new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
    : null;

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
      <ConnectWallet
        setProvider={setProvider}
        setSigner={setSigner}
        setAddress={setAddress}
      />
      <Register contract={contract} address={address} />
      {contract && <AssignFreelancer contract={contract} />}
      {contract && <ReleasePayment contract={contract} />}

      {/* <AssignFreelancer /> */}
      {/* <ReleasePayment /> */}
      {/* <AddFreelancer contract={contract} signer={signer} /> */}
      {/* <PostJob contract={contract} /> */}
      {/* <ApproveMilestone contract={contract} /> */}
      {/* <CompleteJob contract={contract} /> */}
    </div>
  );
}

// export default Register;

// const FreelancePage = () => {
//   return (
//     <div>
//       <Register />
//     </div>
//   );
// };

export default FreelancePage;

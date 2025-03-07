// export default ConnectWallet;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserProvider } from "ethers";

const ConnectWallet = ({ setSigner }) => {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate(); // React Router navigation

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
        setSigner(signer);

        // Set the local storage data for future process
        // ✅ Store role and signature
        localStorage.setItem("userRole", selectedRole);
        localStorage.setItem("walletSignature", signature);

        // Redirect to role selection page
        navigate("/select-role", { state: { account: accounts[0] } });
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask not installed!");
    }
  };

  return (
    <div className="p-4 text-center">
      <button
        onClick={connectWallet}
        className="bg-blue-500 text-white p-2 rounded cursor-pointer"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectWallet;

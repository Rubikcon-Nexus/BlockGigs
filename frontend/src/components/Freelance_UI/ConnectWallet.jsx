// // export default ConnectWallet;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { BrowserProvider } from "ethers";

// const ConnectWallet = ({ setSigner }) => {
//   const [account, setAccount] = useState(null);
//   const [balance, setBalance] = useState(0);
//   const [signature, setSignature] = useState("");
//   const navigate = useNavigate(); // React Router navigation

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const provider = new BrowserProvider(window.ethereum);
//         const signer = await provider.getSigner();
//         const accounts = await provider.send("eth_requestAccounts", []);
//         const account = accounts[0];

//         // Message to sign
//         const message = `Welcome to our platform! Please sign this message to verify your wallet ownership.\n\nWallet: ${account}\nTimestamp: ${Date.now()}`;

//         // Request signature
//         const signature = await signer.signMessage(message);

//         // Update states
//         setAccount(account);
//         setSignature(signature);
//         setSigner(signer);

//         // Store in localStorage
//         localStorage.setItem("userAddress", account);
//         localStorage.setItem("walletSignature", signature);
//         localStorage.setItem("signedMessage", message);
//         localStorage.setItem("lastSignedAt", Date.now().toString());

//         console.log("Wallet connected:", account);
//         console.log("Signature:", signature);

//         // Redirect to role selection page with both account and signature
//         navigate("/select-role", {
//           state: {
//             account: account,
//             signature: signature,
//           },
//         });
//       } catch (error) {
//         if (error.code === 4001) {
//           // User rejected the signature request
//           console.error("User rejected signature request");
//           alert("You need to sign the message to continue");
//         } else {
//           console.error("Wallet connection failed:", error);
//           alert("Failed to connect wallet. Please try again.");
//         }
//       }
//     } else {
//       alert("MetaMask not installed! Please install MetaMask to continue.");
//     }
//   };

//   return (
//     <div className="p-4 text-center">
//       {account ? (
//         <button className="border border-1 p-2 rounded-md text-white bg-gray-500 cursor-pointer">
//           {account}
//         </button>
//       ) : (
//         <button
//           onClick={connectWallet}
//           className="bg-blue-500 text-white p-2 rounded cursor-pointer"
//         >
//           Connect Wallet Button
//         </button>
//       )}
//     </div>
//   );
// };

// export default ConnectWallet;

// 1. ConnectWallet.js - Handles Wallet Connection
import React, { useState } from "react";

import { ethers, BrowserProvider } from "ethers";

const ConnectWallet = ({ setProvider, setSigner, setAddress }) => {
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    const provider = new BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    const accounts = await provider.send("eth_requestAccounts", []);
    const address = accounts[0];
    // const [userAddress, SetUserAddress] = useState("");

    // const address = await signer.getAddress();
    // Un comment here

    setProvider(provider);
    setSigner(signer);
    setAddress(address);
    // SetUserAddress(address);
    console.log("Wallet Connected to", address);
  };

  return (
    <button className="border border-1 rounded-md p-3" onClick={connectWallet}>
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;

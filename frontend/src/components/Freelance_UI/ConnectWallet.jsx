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

import React, { useState, useEffect } from "react";
import { ethers, BrowserProvider } from "ethers";

const ConnectWallet = ({ setProvider, setSigner, setAddress }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [accountAddress, setAccountAddress] = useState("");

  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        setAccountAddress("");
        setProvider(null);
        setSigner(null);
        setAddress(null);
      } else {
        setAccountAddress(accounts[0]);
        setAddress(accounts[0]);
      }
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, []);

  const connectWallet = async () => {
    if (isConnecting) return;
    setIsConnecting(true);

    try {
      if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      setProvider(provider);
      setSigner(signer);
      setAddress(accounts[0]);
      setAccountAddress(accounts[0]);

      console.log("Wallet Connected to", accounts[0]);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <button
      className="border border-1 rounded-md p-3"
      onClick={connectWallet}
      disabled={isConnecting}
    >
      {accountAddress || "Connect Wallet"}
    </button>
  );
};

export default ConnectWallet;

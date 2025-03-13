import { useState } from "react";
// import onboard from "./walletConnect";

const ButtonComponent = () => {
  const [addr, setAddr] = useState("");
  const [balance, setBalance] = useState("");

  const handleConnectWallet = () => {
    let account;
    let balance;
    ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
      account = accounts[0];
      console.log(account);
      setAddr(account);

      ethereum
        .request({
          method: "eth_getBalance",
          params: [account, "latest"],
        })
        .then((result) => {
          console.log(result);
          let wei = parseInt(result, 16);
          let bal = wei / 10 ** 18;
          setBalance(bal);
        });
    });
  };

  return (
    <div>
      <div className="p-10">
        <button
          onClick={handleConnectWallet}
          className="border border-red-800 bg-black text-white p-2 rounded-md"
        >
          Connect Metamask
        </button>

        <div className="border border-red-200 p-4 my-4 font-bold">
          Balance: {balance}
        </div>
        <div className="border border-red-200 p-4 my-4 font-bold">
          Address: {addr}
        </div>
      </div>

      <div className="w-[90%] mx-auto">
        Hello this is the walletConnect component
        <div>
          <WalletConnect />
        </div>
      </div>
    </div>
  );
};

export default ButtonComponent;

// ######################################################
// ####################################################
// import { useState, useEffect } from "react";

// const ButtonComponent = () => {
//   const [addr, setAddr] = useState("");
//   const [balance, setBalance] = useState("");
//   const [network, setNetwork] = useState("");

//   // Function to connect wallet
//   const handleConnectWallet = async () => {
//     if (typeof window.ethereum !== "undefined") {
//       try {
//         const accounts = await ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         const account = accounts[0];
//         setAddr(account);
//         console.log("Connected:", account);

//         // Get balance
//         const balanceHex = await ethereum.request({
//           method: "eth_getBalance",
//           params: [account, "latest"],
//         });
//         const wei = parseInt(balanceHex, 16);
//         setBalance(wei / 10 ** 18);

//         // Get network
//         const chainId = await ethereum.request({ method: "eth_chainId" });
//         setNetwork(chainId);
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       alert("MetaMask not detected. Please install MetaMask!");
//     }
//   };

//   // Function to switch network
//   const switchNetwork = async (chainId) => {
//     try {
//       await ethereum.request({
//         method: "wallet_switchEthereumChain",
//         params: [{ chainId: chainId }], // Chain ID must be in HEX format
//       });
//     } catch (error) {
//       console.error("Error switching network:", error);
//     }
//   };

//   // Function to disconnect wallet
//   const disconnectWallet = () => {
//     setAddr("");
//     setBalance("");
//     setNetwork("");
//     console.log("Disconnected");
//   };

//   // Listen for network changes
//   useEffect(() => {
//     if (typeof window.ethereum !== "undefined") {
//       ethereum.on("chainChanged", (chainId) => {
//         setNetwork(chainId);
//         console.log("Network changed to:", chainId);
//       });

//       ethereum.on("accountsChanged", (accounts) => {
//         if (accounts.length === 0) {
//           disconnectWallet(); // Handle disconnect when user removes account
//         } else {
//           setAddr(accounts[0]);
//         }
//       });
//     }
//   }, []);

//   return (
//     <div className="p-10">
//       <button
//         onClick={handleConnectWallet}
//         className="border border-red-800 bg-black text-white p-2 rounded-md"
//       >
//         Connect MetaMask
//       </button>

//       <button
//         onClick={disconnectWallet}
//         className="border border-red-800 bg-gray-600 text-white p-2 rounded-md ml-2"
//       >
//         Disconnect
//       </button>

//       <div className="border border-red-200 p-4 my-4 font-bold">
//         Address: {addr || "Not connected"}
//       </div>

//       <div className="border border-red-200 p-4 my-4 font-bold">
//         Balance: {balance ? `${balance} ETH` : "N/A"}
//       </div>

//       <div className="border border-red-200 p-4 my-4 font-bold">
//         Network ID: {network || "Unknown"}
//       </div>

//       <button
//         onClick={() => switchNetwork("0x1")} // Ethereum Mainnet (0x1)
//         className="border border-blue-800 bg-blue-600 text-white p-2 rounded-md mr-2"
//       >
//         Switch to Ethereum Mainnet
//       </button>

//       <button
//         onClick={() => switchNetwork("0x89")} // Polygon (Matic) (0x89)
//         className="border border-purple-800 bg-purple-600 text-white p-2 rounded-md"
//       >
//         Switch to Polygon
//       </button>
//     </div>
//   );
// };

// export default ButtonComponent;

// #####################################################################
// #####################################################################

// import { useState, useEffect } from "react";

// const ButtonComponent = () => {
//   const [addr, setAddr] = useState("");
//   const [balance, setBalance] = useState("0");
//   const [network, setNetwork] = useState("");

//   const networks = {
//     "0x1": {
//       chainId: "0x1",
//       chainName: "Ethereum Mainnet",
//       nativeCurrency: {
//         name: "Ether",
//         symbol: "ETH",
//         decimals: 18,
//       },
//       rpcUrls: ["https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"],
//       blockExplorerUrls: ["https://etherscan.io"],
//     },
//     "0x89": {
//       chainId: "0x89",
//       chainName: "Polygon Mainnet",
//       nativeCurrency: {
//         name: "MATIC",
//         symbol: "MATIC",
//         decimals: 18,
//       },
//       rpcUrls: ["https://polygon-rpc.com/"],
//       blockExplorerUrls: ["https://polygonscan.com/"],
//     },
//   };

//   const handleConnectWallet = async () => {
//     if (typeof window.ethereum !== "undefined") {
//       try {
//         const accounts = await ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         const account = accounts[0];
//         setAddr(account);
//         console.log("Connected:", account);

//         const balanceHex = await ethereum.request({
//           method: "eth_getBalance",
//           params: [account, "latest"],
//         });
//         const wei = parseInt(balanceHex, 16);
//         setBalance(wei / 10 ** 18);

//         const chainId = await ethereum.request({ method: "eth_chainId" });
//         setNetwork(chainId);
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       alert("MetaMask not detected. Please install MetaMask!");
//     }
//   };

//   const switchNetwork = async (chainId) => {
//     try {
//       await ethereum.request({
//         method: "wallet_switchEthereumChain",
//         params: [{ chainId }],
//       });
//     } catch (error) {
//       if (error.code === 4902) {
//         try {
//           await ethereum.request({
//             method: "wallet_addEthereumChain",
//             params: [networks[chainId]],
//           });
//         } catch (addError) {
//           console.error("Failed to add network", addError);
//         }
//       } else {
//         console.error("Error switching network:", error);
//       }
//     }
//   };

//   const disconnectWallet = () => {
//     setAddr("");
//     setBalance("");
//     setNetwork("");
//     console.log("Disconnected");
//   };

//   useEffect(() => {
//     if (typeof window.ethereum !== "undefined") {
//       ethereum.on("chainChanged", (chainId) => {
//         setNetwork(chainId);
//         console.log("Network changed to:", chainId);
//       });

//       ethereum.on("accountsChanged", (accounts) => {
//         if (accounts.length === 0) {
//           disconnectWallet();
//         } else {
//           setAddr(accounts[0]);
//         }
//       });
//     }
//   }, []);

//   return (
//     <div className="p-10">
//       <button
//         onClick={handleConnectWallet}
//         className="border border-red-800 bg-black text-white p-2 rounded-md"
//       >
//         Connect MetaMask
//       </button>

//       <button
//         onClick={disconnectWallet}
//         className="border border-red-800 bg-gray-600 text-white p-2 rounded-md ml-2"
//       >
//         Disconnect
//       </button>

//       <div className="border border-red-200 p-4 my-4 font-bold">
//         Address: {addr || "Not connected"}
//       </div>
//       <div className="border border-red-200 p-4 my-4 font-bold">
//         Balance: {balance ? `${balance} ETH` : "0 ETH"}
//       </div>
//       <div className="border border-red-200 p-4 my-4 font-bold">
//         Network ID: {network || "Unknown"}
//       </div>

//       <button
//         onClick={() => switchNetwork("0x1")}
//         className="border border-blue-800 bg-blue-600 text-white p-2 rounded-md mr-2"
//       >
//         Switch to Ethereum Mainnet
//       </button>
//       <button
//         onClick={() => switchNetwork("0x89")}
//         className="border border-purple-800 bg-purple-600 text-white p-2 rounded-md"
//       >
//         Switch to Polygon
//       </button>
//     </div>
//   );
// };

// export default ButtonComponent;

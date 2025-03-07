// import { useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { BrowserProvider } from "ethers";

// const RoleSelection = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [selectedRole, setSelectedRole] = useState("");

//   // Retrieve the wallet address from location state or fallback to localStorage
//   const userAddress =
//     location.state?.account || localStorage.getItem("walletAddress");

//   useEffect(() => {
//     if (!userAddress) {
//       alert("Wallet not connected! Redirecting...");
//       navigate("/"); // Redirect to Connect Wallet page
//     }
//   }, [userAddress, navigate]);

//   const signMessage = async () => {
//     console.log("Signing process started...");
//     if (!selectedRole) {
//       alert("Please select a role.");
//       return;
//     }

//     if (!window.ethereum) {
//       alert("MetaMask not installed!");
//       return;
//     }

//     try {
//       setLoading(true);
//       console.log("Connecting to provider...");

//       //   const provider = new BrowserProvider(window.ethereum);
//       const provider = new BrowserProvider(window.ethereum);
//       await provider.send("eth_requestAccounts", []);
//       // Ensure account access
//       const signer = await provider.getSigner(userAddress);
//       console.log("Signing message...");

//       const message = `Signing in as ${selectedRole} with address: ${userAddress}`;
//       const signature = await signer.signMessage(message);

//       console.log("Signed Message:", signature);

//       // ✅ Store role and signature
//       localStorage.setItem("userRole", selectedRole);
//       localStorage.setItem("walletSignature", signature);

//       // Redirect user after successful signing
//       //   navigate("/dashboard"); // Change to appropriate page
//     } catch (error) {
//       console.error("Signing failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 text-center">
//       <h2 className="text-xl font-bold">Select Your Role</h2>

//       <div className="mt-4">
//         <button
//           className={`p-2 m-2 rounded ${
//             selectedRole === "client" ? "bg-blue-600 text-white" : "bg-gray-300"
//           }`}
//           onClick={() => setSelectedRole("client")}
//         >
//           Client
//         </button>
//         <button
//           className={`p-2 m-2 rounded ${
//             selectedRole === "freelancer"
//               ? "bg-green-600 text-white"
//               : "bg-gray-300"
//           }`}
//           onClick={() => setSelectedRole("freelancer")}
//         >
//           Freelancer
//         </button>
//       </div>

//       <button
//         onClick={signMessage}
//         className="mt-4 bg-purple-500 text-white p-2 rounded"
//         disabled={loading}
//       >
//         {loading ? "Signing..." : "Sign & Continue"}
//       </button>
//     </div>
//   );
// };

// export default RoleSelection;

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BrowserProvider } from "ethers";

const RoleSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  // Retrieve the wallet address from location state or localStorage
  const userAddress =
    location.state?.account || localStorage.getItem("walletAddress");

  useEffect(() => {
    if (!userAddress) {
      alert("Wallet not connected! Redirecting...");
      navigate("/"); // Redirect to Connect Wallet page
    }
  }, [userAddress, navigate]);

  const signMessage = async () => {
    console.log("Signing process started...");
    if (!selectedRole) {
      alert("Please select a role.");
      return;
    }

    if (!window.ethereum) {
      alert("MetaMask not installed!");
      return;
    }

    try {
      setLoading(true);

      console.log("Requesting account access...");
      // const provider = new BrowserProvider(window.ethereum);

      // Request user permission to access accounts
      // await window.ethereum.request({ method: "eth_requestAccounts" });

      console.log("Getting signer...");
      // const signer = await provider.getSigner(); // Fix: No argument needed

      console.log("Signing message...");
      const message = `Signing in as ${selectedRole} with address: ${userAddress}`;
      // const signature = await signer.signMessage(message);

      // console.log("Signed Message:", signature);

      // ✅ Store role and signature
      localStorage.setItem("userRole", selectedRole);
      // localStorage.setItem("walletSignature", signature);

      // output the final message
      console.log("Finally signed the message");

      // ✅ Redirect user after successful signing
      navigate("/dashboard"); // Change to appropriate page
    } catch (error) {
      console.error("Signing failed:", error);
      alert("Signing failed. Check console for details.");
    } finally {
      setLoading(false);
      // ✅ Store role and signature
      // localStorage.setItem("userRole", selectedRole);
      // localStorage.setItem("walletSignature", signature);
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold">Select Your Role</h2>

      <div className="mt-4">
        <button
          className={`p-2 m-2 rounded ${
            selectedRole === "client" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSelectedRole("client")}
        >
          Client
        </button>
        <button
          className={`p-2 m-2 rounded ${
            selectedRole === "freelancer"
              ? "bg-green-600 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => setSelectedRole("freelancer")}
        >
          Freelancer
        </button>
      </div>

      <button
        onClick={signMessage}
        className="mt-4 bg-purple-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? "Signing..." : "Sign & Continue"}
      </button>
    </div>
  );
};

export default RoleSelection;

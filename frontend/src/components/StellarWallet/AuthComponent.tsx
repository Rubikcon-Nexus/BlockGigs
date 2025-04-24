import React, { useEffect, useState } from "react";
import stellar from "../../assets/stellar.png";
import axios from "axios";
import {
  StellarWalletsKit,
  allowAllModules,
  XBULL_ID,
  WalletNetwork,
  ISupportedWallet,
} from "@creit.tech/stellar-wallets-kit";

// Initialize the wallet kit
const kit: StellarWalletsKit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  selectedWalletId: XBULL_ID,
  modules: allowAllModules(),
});

type AuthMode = "login" | "signup";

const AuthComponent: React.FC = () => {
  const [signedTxXdr, setSignedTxXdr] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [authMessage, setAuthMessage] = useState<String>("");
  const [user, setUser] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  const authenticateWithWallet = async (walletAddress: string) => {
    try {
      // 1. Get challenge
      const challengeRes = await axios.post(`${apiUrl}/api/wallet/challenge`, {
        wallet_address: walletAddress,
      });

      // 2. Sign challenge with wallet
      const { signedTxXdr } = await kit.signTransaction(
        challengeRes.data.challenge,
        {
          address: walletAddress,
          networkPassphrase: challengeRes.data.networkPassphrase,
        }
      );

      // 3. Verify with backend
      const authRes = await axios.post(`${apiUrl}/api/wallet/verify`, {
        wallet_address: walletAddress,
        signed_challenge: signedTxXdr,
        role: "talent", // or 'client'
      });

      // Store token and user data
      localStorage.setItem("authToken", authRes.data.token);
      setUser(authRes.data.user);
    } catch (error: any) {
      console.error(error);
      setError(error.response?.data?.message || "Authentication failed");
      // Handle errors
    } finally {
      setLoading(false);
    }
  };
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      kit.disconnect();
    };
  }, []);

  const handleSelectWallet = async () => {
    setLoading(true);
    setError(null);

    try {
      await kit.openModal({
        onWalletSelected: async (option: ISupportedWallet) => {
          kit.setWallet(option.id);
          const { address } = await kit.getAddress();
          setWalletAddress(address);

          // Here you would typically:
          // 1. For login: Verify the address exists in your backend
          // 2. For signup: Register the new address in your backend
          // This is just a simulation:
          //   setTimeout(() => {
          //     setUserAuthenticated(true);
          //     setLoading(false);
          //   }, 1000);

          // Authenticate with backend after getting address
          await authenticateWithWallet(address);
        },
      });
    } catch (err: any) {
      setError("Wallet connection failed: " + err.message);
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    kit.disconnect();
    setWalletAddress(null);
    setUserAuthenticated(false);
    setSignedTxXdr(null);
  };

  const handleSignTransaction = async () => {
    if (!walletAddress) return;

    setLoading(true);
    try {
      // In a real app, you would get the XDR from your backend
      // or construct it properly for your use case
      const { signedTxXdr } = await kit.signTransaction("XDR_HERE", {
        address: walletAddress,
        networkPassphrase: WalletNetwork.TESTNET, // Fixed to match initialization
      });

      setSignedTxXdr(signedTxXdr);
    } catch (err: any) {
      setError(
        err.message || "An error occurred while signing the transaction."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {!userAuthenticated ? (
        <div className="space-y-4">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setAuthMode("login")}
              className={`px-4 py-2 rounded ${
                authMode === "login" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setAuthMode("signup")}
              className={`px-4 py-2 rounded ${
                authMode === "signup" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Sign Up
            </button>
          </div>

          <button
            onClick={handleSelectWallet}
            disabled={loading}
            className={`flex items-center justify-center w-full h-[56px] px-6 py-4 gap-4 rounded-xl border border-gray-200 bg-gray-50 ${
              loading ? "opacity-50" : "hover:bg-gray-100"
            }`}
          >
            <img src={stellar} alt="stellar logo" className="h-6 w-auto" />
            <span className="font-medium text-sm text-gray-700">
              {loading
                ? "Connecting..."
                : `Connect Wallet to ${
                    authMode === "login" ? "Login" : "Sign Up"
                  }`}
            </span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-green-800">
              Successfully {authMode === "login" ? "logged in" : "signed up"}{" "}
              with address:
            </p>
            <p className="font-mono text-sm mt-2 break-all">{walletAddress}</p>
          </div>

          <button
            onClick={handleSignTransaction}
            disabled={loading}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Signing..." : "Sign Test Transaction"}
          </button>

          <button
            onClick={handleSignOut}
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300"
          >
            Sign Out
          </button>
        </div>
      )}

      {/* Transaction results */}
      {signedTxXdr && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-medium mb-2">Signed Transaction XDR:</h3>
          <pre className="text-xs p-2 bg-white rounded overflow-auto">
            {signedTxXdr}
          </pre>
        </div>
      )}

      {/* Error display */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200 text-red-600">
          {error}
        </div>
      )}
    </div>
  );
};

export default AuthComponent;

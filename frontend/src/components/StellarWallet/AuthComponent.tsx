import React, { useState, useEffect } from "react";
import {
  StellarWalletsKit,
  WalletNetwork,
  XBULL_ID,
  allowAllModules,
} from "@creit.tech/stellar-wallets-kit";
import axios from "axios";
import stellar from "../../assets/stellar.png";

type AuthMode = "login" | "signup";
type User = {
  id: string;
  wallet_address: string;
  role: string;
};

interface AuthResponse {
  token: string;
  user: User;
}

const kit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  selectedWalletId: XBULL_ID,
  modules: allowAllModules(), // Let user choose wallet
});

const AuthComponent: React.FC = () => {
  const [authState, setAuthState] = useState<{
    walletAddress: string | null;
    user: User | null;
    error: string | null;
    loading: boolean;
    authMode: AuthMode;
  }>({
    walletAddress: null,
    user: null,
    error: null,
    loading: false,
    authMode: "login",
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  // Check existing session on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Add token to axios headers
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Optional: Validate token with backend
      validateSession(token);
    }
  }, []);

  const validateSession = async (token: string) => {
    try {
      const res = await axios.get(`${apiUrl}/api/validate-session`);
      setAuthState((prev) => ({
        ...prev,
        user: res.data.user,
        walletAddress: res.data.user.wallet_address,
      }));
    } catch {
      localStorage.removeItem("authToken");
    }
  };

  const authenticateWithWallet = async (address: string) => {
    setAuthState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // 1. Get challenge
      const challengeRes = await axios.post(`${apiUrl}/api/wallet/challenge`, {
        wallet_address: address,
      });

      // 2. Sign challenge
      const { signedTxXdr } = await kit.signTransaction(
        challengeRes.data.challenge,
        {
          address,
          networkPassphrase: challengeRes.data.networkPassphrase,
        }
      );

      // 3. Verify
      const authRes = await axios.post<AuthResponse>(
        `${apiUrl}/api/wallet/verify`,
        {
          wallet_address: address,
          signed_challenge: signedTxXdr,
          action: authState.authMode,
          role: "talent", // or make this configurable
        }
      );

      // Update state and store token
      localStorage.setItem("authToken", authRes.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${authRes.data.token}`;

      setAuthState({
        ...authState,
        user: authRes.data.user,
        walletAddress: address,
        loading: false,
        error: null,
      });
    } catch (error: any) {
      setAuthState((prev) => ({
        ...prev,
        error:
          error.response?.data?.message ||
          error.message ||
          "Authentication failed",
        loading: false,
      }));
    }
  };

  const handleSelectWallet = async () => {
    try {
      await kit.openModal({
        onWalletSelected: async (option) => {
          kit.setWallet(option.id);
          const { address } = await kit.getAddress();
          await authenticateWithWallet(address);
        },
      });
    } catch (error: any) {
      setAuthState((prev) => ({
        ...prev,
        error: "Wallet connection failed: " + error.message,
        loading: false,
      }));
    }
  };

  const handleSignOut = () => {
    kit.disconnect();
    localStorage.removeItem("authToken");
    delete axios.defaults.headers.common["Authorization"];
    setAuthState({
      walletAddress: null,
      user: null,
      error: null,
      loading: false,
      authMode: "signup",
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {!authState.user ? (
        <div className="space-y-4">
          <button
            onClick={handleSelectWallet}
            disabled={authState.loading}
            className={`flex items-center justify-center w-full h-[56px] px-6 py-4 gap-4 rounded-xl border border-gray-200 bg-gray-50 ${
              authState.loading ? "opacity-50" : "hover:bg-gray-100"
            }`}
          >
            <img src={stellar} alt="stellar logo" className="h-6 w-auto" />
            <span className="font-medium text-sm text-gray-700">
              {authState.loading
                ? "Connecting..."
                : `Connect Wallet to ${
                    authState.authMode === "login" ? "Login" : "Sign Up"
                  }`}
            </span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-green-800">
              Successfully{" "}
              {authState.authMode === "login" ? "logged in" : "signed up"}
            </p>
            <p className="font-mono text-sm mt-2 break-all">
              {authState.walletAddress}
            </p>
          </div>

          <button
            onClick={handleSignOut}
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300"
          >
            Sign Out
          </button>
        </div>
      )}

      {authState.error && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200 text-red-600">
          {authState.error}
        </div>
      )}
    </div>
  );
};

export default AuthComponent;

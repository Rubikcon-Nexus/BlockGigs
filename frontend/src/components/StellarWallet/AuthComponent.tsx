import React, { useState, useEffect } from "react";
import stellar from "../../assets/stellar.png";
import axios from "axios";
import {
  StellarWalletsKit,
  WalletNetwork,
  FreighterModule,
  xBullModule,
  AlbedoModule,
  FREIGHTER_ID,
} from "@creit.tech/stellar-wallets-kit";

// Initialize wallet kit
const kit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  selectedWalletId: FREIGHTER_ID, // Let user select wallet
  modules: [new FreighterModule(), new xBullModule(), new AlbedoModule()],
});

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

interface ChallengeResponse {
  challenge: string;
  networkPassphrase: string;
}

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

  const apiUrl = "http://localhost:4000";

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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
    } catch (error) {
      localStorage.removeItem("authToken");
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  const handleSelectWallet = async () => {
    setAuthState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // Check if Freighter is installed
      if (typeof window.freighterApi === "undefined") {
        throw new Error(
          "Freighter wallet is not installed. Please install it first."
        );
      }

      await kit.openModal({
        onWalletSelected: async (option) => {
          try {
            kit.setWallet(option.id);
            const { address } = await kit.getAddress();
            console.log("Wallet connected:", address);
            await authenticateWithWallet(address);
          } catch (error: any) {
            console.error("Wallet interaction error:", error);
            let errorMessage = "Wallet connection failed";

            if (error.message?.includes("internal error")) {
              errorMessage =
                "Please make sure your Freighter wallet is unlocked and on the Testnet network.";
            } else if (error.message) {
              errorMessage = error.message;
            }

            setAuthState((prev) => ({
              ...prev,
              error: errorMessage,
              loading: false,
            }));
          }
        },
      });
    } catch (error: any) {
      console.error("Wallet modal error:", error);
      setAuthState((prev) => ({
        ...prev,
        error:
          error.message ||
          "Failed to open wallet selector. Please make sure Freighter is installed and unlocked.",
        loading: false,
      }));
    }
  };

  const authenticateWithWallet = async (address: string) => {
    try {
      // 1. Get challenge from backend
      const challengeRes = await axios.post<ChallengeResponse>(
        `${apiUrl}/api/wallet/challenge`,
        { wallet_address: address }
      );

      // 2. Sign the challenge
      const { signedTxXdr } = await kit.signTransaction({
        xdr: challengeRes.data.challenge,
        publicKey: address,
        networkPassphrase: challengeRes.data.networkPassphrase,
      });

      // 3. Verify with backend
      const authRes = await axios.post<AuthResponse>(
        `${apiUrl}/api/wallet/verify`,
        {
          wallet_address: address,
          signed_challenge: signedTxXdr,
          action: authState.authMode,
          role: "talent",
        }
      );

      // 4. Store token and update state
      localStorage.setItem("authToken", authRes.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${authRes.data.token}`;

      setAuthState({
        walletAddress: address,
        user: authRes.data.user,
        error: null,
        loading: false,
        authMode: authState.authMode,
      });

      // Redirect for signup if needed
      if (authState.authMode === "signup") {
        window.location.href = `/verify?wallet=${address}`;
      }
    } catch (error: any) {
      console.error("Authentication error details:", error);

      let errorMessage = "Authentication failed";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      } else if (error.ext?.message) {
        errorMessage = error.ext.message;
      }

      setAuthState((prev) => ({
        ...prev,
        error: errorMessage,
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
      authMode: "login",
    });
  };

  const toggleAuthMode = () => {
    setAuthState((prev) => ({
      ...prev,
      authMode: prev.authMode === "login" ? "signup" : "login",
      error: null, // Clear error when toggling
    }));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {!authState.user ? (
        <div className="space-y-4">
          <button
            onClick={handleSelectWallet}
            disabled={authState.loading}
            className={`flex items-center justify-center w-full h-[56px] px-6 py-4 gap-4 rounded-xl border border-gray-200 bg-gray-50 ${
              authState.loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
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

          <div className="text-center">
            <button
              onClick={toggleAuthMode}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              {authState.authMode === "login"
                ? "Need an account? Sign up"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-green-800 font-medium">
              Successfully{" "}
              {authState.authMode === "login" ? "logged in" : "signed up"}
            </p>
            <p className="font-mono text-sm mt-2 break-all">
              {authState.walletAddress}
            </p>
          </div>

          <button
            onClick={handleSignOut}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 rounded-lg transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}

      {authState.error && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200 text-red-600">
          <p className="font-medium">Error:</p>
          <p>{authState.error}</p>
          {authState.error.includes("internal error") && (
            <p className="mt-2 text-sm">
              Try refreshing the page or using a different wallet.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthComponent;

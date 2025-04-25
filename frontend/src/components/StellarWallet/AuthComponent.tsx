import React, { useState, useEffect } from "react";
import stellar from "../../assets/stellar.png";
import axios from "axios";
// using of wallet connect
import {
  WalletConnectAllowedMethods,
  WalletConnectModule,
  WALLET_CONNECT_ID,
} from "@creit.tech/stellar-wallets-kit/modules/walletconnect.module";

import {
  StellarWalletsKit,
  WalletNetwork,
  // Identifiers
  XBULL_ID, // the id for the different wallet
  ALBEDO_ID,
  HANA_ID,
  // LEDGER_ID, //IMPORT
  // TREZOR_ID, //IMPORT
  LOBSTR_ID,
  // WALLET_CONNECT_ID, // IMPORT
  HOTWALLET_ID,
  FREIGHTER_ID,
  RABET_ID,
  allowAllModules,
  // other modules
  xBullModule,
  AlbedoModule,
  FreighterModule,
  HotWalletModule,
} from "@creit.tech/stellar-wallets-kit";

const kit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  selectedWalletId: FREIGHTER_ID,
  // modules: allowAllModules(),
  modules: [
    // new xBullModule(),
    new FreighterModule(),
    // new AlbedoModule(),
    // new LedgerModule(),
    // new WalletConnectModule({
    //   url: "https://blockgigs.xyz",
    //   projectId: "YOUR PROJECT ID",
    //   method: WalletConnectAllowedMethods.SIGN,
    //   description: `A DESCRIPTION TO SHOW USERS`,
    //   name: "Blockgigs",
    //   icons: [stellar],
    //   network: WalletNetwork.TESTNET,
    // }),
  ],

  // modules: allowAllModules(), // Let user choose wallet
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

  const apiUrl: string = "http://localhost:4000";
  // CHANGE WITH THE URL BELOW
  // https://blockgigs-bt8d.onrender.com

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
      // 1. Get challenge transaction (XDR) from backend
      const challengeRes = await axios.post(`${apiUrl}/api/wallet/challenge`, {
        wallet_address: address,
      });

      const challengeXdr = challengeRes.data.challenge;
      const networkPassphrase = challengeRes.data.networkPassphrase;

      // 2. Sign challenge using connected wallet
      const { signedTxXdr } = await kit.signTransaction(challengeXdr, {
        address,
        networkPassphrase,
      });

      // 3. Send signed challenge to verify and authenticate
      const authRes = await axios.post<AuthResponse>(
        `${apiUrl}/api/wallet/verify`,
        {
          wallet_address: address,
          signed_challenge: signedTxXdr,
          action: authState.authMode,
          role: "talent", // or make this dynamic
        }
      );

      // 4. Store token and update state
      // localStorage.setItem("authToken", authRes.data.token);
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${authRes.data.token}`;

      // setAuthState((prev) => ({
      //   ...prev,
      //   user: authRes.data.user,
      //   walletAddress: address,
      //   loading: false,
      //   error: null,
      // }));
      // 4. Store token and update state
      localStorage.setItem("authToken", authRes.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${authRes.data.token}`;

      setAuthState((prev) => ({
        ...prev,
        user: authRes.data.user,
        walletAddress: address,
        loading: false,
        error: null,
      }));

      // 🚀 Redirect to Persona only if it's a signup
      if (authState.authMode === "signup") {
        window.location.href = `https://your-persona-endpoint.com/verify?wallet=${address}`;
      }
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

          console.log(address);
          // query the api here
          // await authenticateWithWallet(address);
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
            // onClick={authenticateWithWallet}
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

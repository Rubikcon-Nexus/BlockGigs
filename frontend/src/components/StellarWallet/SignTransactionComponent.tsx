import React, { useEffect, useState } from "react";
import stellar from "../../assets/stellar.png";
import {
  StellarWalletsKit,
  allowAllModules,
  WalletNetwork,
  XBULL_ID,
  ISupportedWallet,
} from "@creit.tech/stellar-wallets-kit";

// Initialize the wallet kit with TESTNET and all available modules
const kit: StellarWalletsKit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,

  selectedWalletId: XBULL_ID,
  // this forces selection before modal opens
  modules: allowAllModules(),
});

const SignTransactionComponent: React.FC = () => {
  const [signedTxXdr, setSignedTxXdr] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletSelected, setWalletSelected] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  // Function to open modal and set selected wallet
  const handleSelectWallet = async () => {
    try {
      await kit.openModal({
        onWalletSelected: async (option: ISupportedWallet) => {
          kit.setWallet(option.id);
          const { address } = await kit.getAddress();
          setWalletAddress(address); // Store selected address
          setWalletSelected(true); // Indicate wallet has been selected
          if (walletSelected) {
            console.log("wallet stellar wallet connected.");
          }
        },
      });
    } catch (err: any) {
      setError("Wallet selection failed: " + err.message);
    }
  };

  // Sign transaction after wallet is selected
  useEffect(() => {
    const signTx = async () => {
      if (!walletSelected || !walletAddress) return;

      try {
        const { signedTxXdr } = await kit.signTransaction("XDR_HERE", {
          address: walletAddress,
          networkPassphrase: WalletNetwork.PUBLIC,
        });

        setSignedTxXdr(signedTxXdr);
      } catch (err: any) {
        setError(
          err.message || "An error occurred while signing the transaction."
        );
      }
    };

    signTx();
  }, [walletSelected, walletAddress]);

  return (
    <div className="p-4 ">
      {!walletSelected && (
        <button
          onClick={handleSelectWallet}
          disabled={loading}
          className={`flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA] ${
            loading ? "opacity-50" : ""
          }`}
        >
          <img
            src={stellar}
            alt="stellar logo"
            className="h-6 w-auto font-bold ml-3"
          />
          <span className="font-montserrat  font-medium text-[14px] leading-6 text-[#272954]">
            {loading ? "Connecting..." : "Connect Wallet"}
          </span>
        </button>
      )}

      {/* Result display */}
      {error ? (
        <p className="text-red-500 mt-4">{error}</p>
      ) : signedTxXdr ? (
        <pre className="bg-gray-100 p-2 rounded mt-4 whitespace-pre-wrap break-words">
          {signedTxXdr}
        </pre>
      ) : walletSelected ? (
        <p className="mt-4">Signing transaction...</p>
      ) : (
        <p className="mt-4 text-sm">Please select a wallet to begin signing.</p>
      )}
    </div>
  );
};

export default SignTransactionComponent;

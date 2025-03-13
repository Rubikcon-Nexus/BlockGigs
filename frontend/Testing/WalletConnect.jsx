import React, { useState } from "react";
import onboard from "./walletConnect";

const WalletConnect = () => {
  const [wallet, setWallet] = useState(null);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    const wallets = await onboard.connectWallet();
    if (wallets.length > 0) {
      setWallet(wallets[0]);
      setAccount(wallets[0].accounts[0].address);
    }
  };

  const disconnectWallet = async () => {
    await onboard.disconnectWallet({ label: wallet.label });
    setWallet(null);
    setAccount(null);
  };

  return (
    <div>
      {account ? (
        <div>
          <p>Connected: {account}</p>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="border border-2 rounded-md p-2"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;

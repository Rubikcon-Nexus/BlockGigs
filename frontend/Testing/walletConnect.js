import Onboard from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";

const injected = injectedModule();
const walletConnect = walletConnectModule({
  projectId: "4cddeeb9b65133a5ae588d70b0b87b43", // Get this from WalletConnect
});

const onboard = Onboard({
  wallets: [injected, walletConnect],
  chains: [
    {
      id: "0x1", // Ethereum mainnet
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl: "https://mainnet.infura.io/v3/69fff3735253474c97978866a460dab8",
    },
  ],
  appMetadata: {
    name: "My DApp",
    description: "A decentralized application",
    icon: "https://myapp.com/icon.png",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
      { name: "Coinbase Wallet", url: "https://wallet.coinbase.com/" },
    ],
  },
});

export default onboard;

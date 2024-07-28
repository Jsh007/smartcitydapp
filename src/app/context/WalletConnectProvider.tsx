import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { ReactNode, useMemo } from 'react';

import { QUICKNODE_DEVNET_ENDPOINT } from 'src/web3/constants';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

type walletProps = {
  children: ReactNode;
};

function WalletConnectProvider({ children }: walletProps) {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  // This is where you set your Premium RPC connection string
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => {
    if (network === WalletAdapterNetwork.Devnet) {
      // return 'https://api.devnet.solana.com';
      return QUICKNODE_DEVNET_ENDPOINT;
    }
    return clusterApiUrl(network);
  }, [network]);

  // console.log(endpoint);
  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(() => [new TorusWalletAdapter(), new LedgerWalletAdapter()], [network]);

  return (
    <ConnectionProvider endpoint={endpoint} config={{ commitment: 'confirmed' }}>
      <WalletProvider
        wallets={wallets}
        autoConnect
        onError={(error, adapter) => {
          console.log(error, adapter);
        }}
      >
        <WalletModalProvider> {children} </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default WalletConnectProvider;

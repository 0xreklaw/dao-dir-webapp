import type { AppProps } from 'next/app'
import '@/styles/globals.css'

//  context
import { ProfileProvider } from '@/context/ProfileState';

//  @note:  wallet support via connectkit family
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "DAO Directory",
    alchemyId,
  }),
);

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ProfileProvider>
      <WagmiConfig client={client}>
        <ConnectKitProvider
          customTheme={{
            "--ck-font-family": 'ui-monospace, Menlo, Monaco, "Cascadia Mono"',
          }}
        >
          <Component {...pageProps} />
        </ConnectKitProvider>
      </WagmiConfig>
    </ProfileProvider>
  </>
}

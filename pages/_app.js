import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
//Moralis
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

//Moralis

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});


function MyApp({ Component, pageProps }) {


  return  (
    
    <WagmiConfig client={client}>
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  </WagmiConfig>


  )
}

export default MyApp

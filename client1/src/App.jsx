import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ContractContextProvider from './Context/contractContect'
import Home from './Pages/Home/Home'
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  polygonAmoy,
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import '@rainbow-me/rainbowkit/styles.css';
function App() {

  const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [polygonAmoy, mainnet, polygon, optimism, arbitrum, base],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });

  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config} >
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({
          ...darkTheme.accentColors.red,
        })}>
          <ContractContextProvider>
            <Navbar />
            <Home />

          </ContractContextProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App

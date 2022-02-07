import '../styles/globals.css'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {ThirdwebWeb3Provider} from "@3rdweb/hooks"
const supportedChainIds = [4]
const connectors ={
  injected:{},
}
function MyApp({ Component, pageProps }) {
 return( <ThirdwebWeb3Provider
  supportedChainIds={supportedChainIds}
  connectors={connectors}>
    
   <Component {...pageProps} />
  </ThirdwebWeb3Provider>)
}

export default MyApp

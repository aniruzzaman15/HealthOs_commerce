import Layout from '../components/Layout/Layout'
import { StateContext } from '../context/contextState'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <StateContext>
      <Layout><Component {...pageProps} /></Layout>
      </StateContext>
  )


}

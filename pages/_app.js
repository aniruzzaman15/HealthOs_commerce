import Layout from '../components/Layout/Layout'
import RecoilNexus from "recoil-nexus";
import { RecoilRoot, } from 'recoil';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <RecoilRoot>
    <RecoilNexus />
      <Layout><Component {...pageProps} /></Layout>
      </RecoilRoot>
  )


}

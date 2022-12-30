import Layout from '../components/Layout/Layout'
import RecoilNexus from "recoil-nexus";
import { RecoilRoot, } from 'recoil';
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }) {
  return(
    <RecoilRoot>
    <RecoilNexus />
    <ToastContainer/>
      <Layout><Component {...pageProps} /></Layout>
      </RecoilRoot>
  )


}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar/Navbar'
import HeroBanner from '../components/Home/HeroBannar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <Navbar/>
    <div className='container mx-auto'>
    <HeroBanner />
    <div className="text-center my-[40px] mx-[0] text-[#324d67]">
      <h2 className='text-[40px] font-extrabold'>Best Seller Products</h2>
      <p className='text-[16px] font-[200]'>speaker There are many variations passages</p>
    </div>

    {/* <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div> */}

    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
  </div>
    </>

  )
}

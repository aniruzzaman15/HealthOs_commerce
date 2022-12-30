
import {useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroBanner from '../components/Home/HeroBannar'
import Footer from '../components/Home/Footer'
import Cart from '../components/cart/Cart'
import ProductDetail from '../components/Home/Product';
import { server } from './../config';
import connect from "../lib/mongodb";
import Product from '../model/ProductSchema'
import { ProductsState } from '../State/State'
import { useRecoilState } from 'recoil';

export default function Home(props) {

  const [allProducts, setAllProducts] = useRecoilState(ProductsState && ProductsState)

  useEffect(()=>{
    setAllProducts(props.products)
  },[])

  return (
    <>
    <Navbar/>
    <div className='container mx-auto'>
    <HeroBanner />
    <div className="text-center my-[40px] mx-[0] text-[#324d67]">
      <h2 className='text-[40px] font-extrabold'>Best Seller Products</h2>
      <p className='text-[16px] font-[200]'>speaker There are many variations passages</p>
    </div>

    <div className="products-container flex  flex-wrap justify-center gap-[15px] mb-[50px] mt-[20px] w-full">
      {props.products?.map((product) => <ProductDetail product={product} />)}
    </div>
    <Footer/>
  </div>
    </>
  )
}

export async function getServerSideProps(){
  let products = []
  connect()
  try{
    const res = await Product.find()
    if(res) products = res
  } catch (e) {
    console.log(e)
  }



  return {
    props:{
      products:JSON.parse(JSON.stringify(products))
    }
  }
}
import React from 'react'
import Footer from '../../components/Home/Footer';
import ProductDetail from '../../components/Home/Product'

import Navbar from '../../components/Navbar/Navbar'
import connect from './../../lib/mongodb';
import Product from './../../model/ProductSchema'

function index({products}) {
  return (
    <div>
      <Navbar/>
      <div className="text-center my-[40px] mx-[0] text-[#324d67]">
      <h2 className='text-[40px] font-extrabold'>Products</h2>
      <p className='text-[16px] font-[200]'>Pick What You Like</p>
    </div>

      <div className="products-container my-[100px] container mx-auto flex flex-wrap justify-center gap-[15px] mt-[20px] w-full">
      {products?.map((product) => <ProductDetail key={product.name} product={product} />)}
    </div>
    <Footer/>
    </div>
  )
}

export default index


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

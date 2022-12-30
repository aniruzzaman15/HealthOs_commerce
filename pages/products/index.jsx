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
      <div className="products-container flex flex-wrap justify-center gap-[15px] mt-[20px] w-full">
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

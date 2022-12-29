import React,{useState } from 'react'

import DashboardNavbar from './../DashboardNavbar';
import ProductTable from './ProductTable';

import ProductDetail from './productDetail';



function ProductList() {
  const [productDetailIsOpen, setProductDetailIsOpen] = useState(false);

  const selectProductHandler = () => {
    console.log('hey')
    if (productDetailIsOpen) setProductDetailIsOpen(false);
    else setProductDetailIsOpen(true);
  };

  return (
    <>
    <DashboardNavbar/>
    <div className="mt-5">
        {!productDetailIsOpen && (
          <ProductTable selectProductHandler={selectProductHandler} />
        )}
        {productDetailIsOpen && (
          <ProductDetail selectProductHandler={selectProductHandler} />
        )}

    </div>


    </>
  )
}

export default ProductList

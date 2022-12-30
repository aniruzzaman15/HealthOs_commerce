import React, { useState } from "react";
import DashboardNavbar from "./../DashboardNavbar";
import ProductTable from "./ProductTable";
import ProductDetail from "./productDetail";
import { server } from "./../../../config";
import { useRecoilValue } from 'recoil';
import { activeProductDetailState, ProductsState } from "../../../State/State";
import { getRecoil, setRecoil } from 'recoil-nexus';

function ProductList() {
  const [productDetailIsOpen, setProductDetailIsOpen] = useState(false);

  const selectProductHandler = (product) => {
    setRecoil(activeProductDetailState,product)
    if (productDetailIsOpen) setProductDetailIsOpen(false);
    else setProductDetailIsOpen(true);
  };

  const deleteThisProduct = async (product_id) => {
    let data = { product_id };

    const result = await fetch(`${server}/api/removeProduct`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if(result) {
      let products = [...getRecoil(ProductsState)]
      products = products.filter((product)=>product.product_id !== product_id)
      setRecoil(ProductsState, products)
    }


  };

  return (
    <>
      <DashboardNavbar />
      <div className="mt-5">
        {!productDetailIsOpen && (
          <ProductTable
            deleteThisProduct={deleteThisProduct}
            selectProductHandler={selectProductHandler}
          />
        )}
        {productDetailIsOpen && (
          <ProductDetail selectProductHandler={selectProductHandler} />
        )}
      </div>
    </>
  );
}

export default ProductList;

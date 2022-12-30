import React from "react";
import { useRecoilValue } from 'recoil';
import { activeProductDetailState } from "../../../State/State";

function ProductDetail({ selectProductHandler }) {
  const product = useRecoilValue(activeProductDetailState)
  return (
    <div className="bg-gray-100 pb-12">
      <button
        onClick={selectProductHandler}
        className="block w-[200px] text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
      >
        Back to Product List
      </button>
      <div className="w-full text-white bg-main-color">
        <div className="container  justify-center my-5 p-5">
          <div className="w-full md:w-9/12  md:mx-2">
            <div className="bg-white p-3 ">
              <img className="w-[400px] " src= {product?.product_thumbnail} alt="" />
              <div className="flex justify-between w-full">
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  {product?.product_name}
                </h1>
                <h1 className="text-gray-500 font-bold text-lg leading-5 my-1">
                  In stock
                </h1>
              </div>

              <div className="flex justify-between w-full">
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  Added date
                </h1>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1"></h1>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  12-12-12
                </h1>
              </div>

              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Total Sold</span>
                  <span className="ml-auto">34+</span>
                </li>

                <li className="flex items-center py-3">
                  <span>Refundable</span>
                  <span className="ml-auto">Yes</span>
                </li>
                <li className="flex items-center py-3">
                  <span>In offer</span>
                  <span className="ml-auto">no</span>
                </li>
                <li className="flex items-center py-3">
                  <span>Price</span>
                  <span className="ml-auto">$232</span>
                </li>
              </ul>
            </div>

            <div className="my-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

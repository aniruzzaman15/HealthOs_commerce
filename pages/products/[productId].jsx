import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import connect from "../../lib/mongodb";
import Product from "../../model/ProductSchema";
import { useRouter } from "next/router";
import Footer from './../../components/Home/Footer';
import { useRecoilState } from 'recoil';
import { cartState } from './../../State/State';

function SingleProduct({product}) {
//   export const cartState = atom({
//     key: "cartState",
//     default: {
//         totalQty:0,
//         products:[]
//     }
// });
  const [cartValue, setCartValue] = useRecoilState(cartState)
  const router = useRouter();
  const query = router.query;
  console.log("quereeey", product);

  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className=" flex  gap-[40px]  text-[#324d67] max-w-[1200px] mt-[60px] py-[50px] mx-auto ">
          <div>
            <div className="image-container">
              <img
                src={product.product_thumbnail}
                className="product-detail-image hover:bg-[#f02d34] rounded-[15px] bg-[#ebebeb] w-[400px] h-[400px] cursor-pointer duration-300 ease-in-out transition-all"
              />
            </div>
          </div>

          <div className="product-detail-desc">
            <h1 className="mt-[10px] text-[22px]">{product.product_name}</h1>
            <div className="reviews flex mt-[15px]">
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(20)</p>
            </div>
            <h4 className="mt-[10px]">Details: </h4>
            <p className="mt-[10px]">{"details"}</p>
            <p className="price font-bold text-[26px] mt-[30px] text-[#f02d34]">
              {product.price}
            </p>
            <div className="quantity flex gap-[20px] mt-[10px] items-center">
              <h3>Quantity:</h3>
              <p className="quantity-desc border-[1px] border-solid border-[#191919] p-[6px] flex">
                <span
                  className="minus text-[16px] py-[6px] px-[12px] flex justify-center items-center cursor-pointer border-[1px] border-solid border-[#191919]"
                  onClick={"decQty"}
                >
                  <AiOutlineMinus />
                </span>
                <span className="num  text-[20px] py-[6px] px-[12px] cursor-pointer ">
                  {cartValue.totalQty}
                </span>
                <span
                  className="plus text-[16px] text-[rgb(49,168,49)] flex justify-center items-center border-[1px] border-solid border-[#191919]  py-[6px] px-[12px] cursor-pointer "
                  onClick={"incQty"}
                >
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons flex gap-[30px]">
              <button
                type="button"
                className="add-to-cart py-[10px] px-[20px] mt-[40px] text-[18px] font-medium bg-white cursor-pointer w-[200px]  text-[#f02d34] scale-[1,1] transition-transform duration-[0.5s] ease hover:scale-[1.1,1.1] border-[1px] border-solid border-[#191919]"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="buy-now w-[200px] py-[10px] px-[20px] bg-[#f02d34] text-white border-none mt-[40px] text-[18px] font-medium cursor-pointer scale-[1,1] transition-transform duration-[0.5s] ease hover:scale-[1.1,1.1] "
                onClick={"handleBuyNow"}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export async function getServerSideProps(ctx) {
  let { params } = ctx;
  console.log(params);
  let product = {};
  connect();
  try {
    const res = await Product.findOne({ product_id: params.productId });
    console.log(res);
    if (res) product = res;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      product:JSON.parse(JSON.stringify(product))
    },
  };
}

export default SingleProduct;

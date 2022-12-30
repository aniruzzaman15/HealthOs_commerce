import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useRecoilState } from 'recoil';
import { cartIsOpenState } from '../../State/State';


const Cart = () => {

const [cartItems, setCartItems] = useState([{}])
const [showCart,setShowCart] = useState(true)

const [cartIsOpen, setCartIsOpen] = useRecoilState(cartIsOpenState)
  return (
    <div className=" w-[100vw] bg-[rgba(0,0,0,0.5)] fixed right-0 top-0 z-[100] transition transition-all ease-in-out duration-1000 " >
      <div className="cart-container h-[100vh] w-[600px] bg-white float-right py-[40px] px-[10px] relative">
        <button
        type="button"
        className="cart-heading flex items-center text-[18px] font-medium pointer gap-[2px] ml-[10px] border-none bg-transparent"
        onClick={() => setCartIsOpen(false)}>
          <AiOutlineLeft />
          <span className="heading ml-[10px] ">Your Cart</span>
          <span className="cart-num-items ml-[10px] text-[#f02d34]">({'totalQuantities'} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart m-[40px] text-center">
            <AiOutlineShopping size={150} />
            <h3 className='font-semibold text-[20px] '>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className=" w-full max-w-[400px] py-[10px] px-[12px] rounded-[15px] border-none text-[20px] mt-[40px] uppercase bg-[#f02d34] text-[#fff] pointer "
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container mt-[10px]">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product py-[20px] px-[5px]" key={'item._id'}>
              <img src={''} className="cart-product-image w-[25%] h-[25%] " />
              <div className=" w-[200px]">
                <div className="flex-wrap gap-[10px]">
                  <h5 className='text-[16px] text-[#324d67]'>{'item.name'}</h5>
                  <h4 className='text-[16px] text-[#000]'>{'item.price'}</h4>
                </div>
                <div className="flex-wrap mt-[30px]">
                  <div>
                  <p className=" border-[1px] border-solid border-[#eee] p-[6px]">
                    <span className="minus text-[16px] py-[6px] px-[12px] pointer text-[#f02d34] border-r-[1px] border-solid border-[gray]"
                    //  onClick={() => toggleCartItemQuanitity(item._id, 'dec') }
                    >
                    <AiOutlineMinus />
                    </span>
                    <span className="num  text-[20px] py-[6px] px-[12px] pointer  border-r-[1px] border-solid border-[gray]" onClick="">{'item.quantity'}</span>
                    <span className="plus  text-[16px] py-[6px] px-[12px] pointer text-[rgb(49, 168, 49)]  border-r-[1px] border-solid border-[gray]"
                    //  onClick={() => toggleCartItemQuanitity(item._id, 'inc') }
                     ><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className=" text-[24px] text-[#f02d34] pointer bg-transparent border-none"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom absolute bottom-[12px] right-[5px] w-full py-[30px] px-[64px]">
            <div className="total flex space-between">
              <h3 className='text-[20px]'>Subtotal:</h3>
              <h3 className='text-[20px]'>{'totalPrice'}</h3>
            </div>
            <div className="btn-container w-[400px] m-auto">
              <button type="button" className="w-full max-w-[400px] py-[10px] px-[12px] rounded-[15px] border-none text-[20px] mt-[40px] uppercase bg-[#f02d34] text-[#fff] pointer "
              //  onClick={handleCheckout}
               >
                Pay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
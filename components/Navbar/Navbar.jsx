// import { Badge} from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import Link from 'next/link'

import { BsFillCartFill } from "react-icons/bs";
import Cart from './../cart/Cart';
import { useRecoilState } from 'recoil';
import { cartIsOpenState } from "../../State/State";
const Navbar = () => {

  const [cartIsOpen,setRecoilState] = useRecoilState(cartIsOpenState)

  return (
    <div className="navbar h-[72px] shadow-sm relative z-10 ">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        <div className=" flex-1   mobile:ml-6">
          <h4 className="logo font-bold text-[18px]">HealthOs Commerce</h4>
        </div>
        <div className=" left flex flex-1  items-center">
          {/* Search Input */}

          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search Products.."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </div>

        {/* Logo */}

        {/* Right Side */}
        <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]">
        <Link href='/dashboard' className="text-[16px] cursor-pointer ml-[25px] mobile:ml-[5px]">Dashboard</Link>
        <Link href='/products' className="text-[16px] cursor-pointer ml-[25px] mobile:ml-[5px]">Products</Link>
          <Link href='/signup' className="text-[16px] cursor-pointer ml-[25px] mobile:ml-[5px]">Sign Up</Link>
          <Link href='/signin' className="text-[16px] cursor-pointer ml-[25px] mobile:ml-[5px]">Sign In</Link>

          <div className="text-[16px] cursor-pointer ml-[25px] mobile:ml-[5px]">
          <div className="relative">
          <BsFillCartFill size='1.5em'/>

          <div className="inline-flex absolute -top-[17px] -right-[17px] justify-center items-center w-6 h-6 text-xs font-bold text-[#000] ">20</div>
          </div>


          </div>
        </div>
      </div>
      {
       cartIsOpen && <Cart/>
      }

    </div>
  );
};

export default Navbar;

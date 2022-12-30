
import React from "react";
import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
import Cart from "./../cart/Cart";
import { useRecoilState } from "recoil";
import { cartIsOpenState } from "../../State/State";
import { useRecoilValue } from "recoil";
import { cartState } from "./../../State/State";
import { userState } from "./../../State/State";
import { useState } from 'react';
import { logoutHandler } from "../../lib/utils";


const Navbar = () => {
  const [cartIsOpen, setCartIsOpen] = useRecoilState(cartIsOpenState);
  const user = useRecoilValue(userState);

  const cartValue = useRecoilValue(cartState);
  const [settingsActive, setSettingsActive] = useState(false);

  const toggleSetting = () => {
    setSettingsActive(!settingsActive);
  };


  return (
    <div className="navbar h-[72px] shadow-sm relative z-10 ">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        <div className=" flex-1   mobile:ml-6">
          <Link href="/">
            <h4 className="logo font-bold text-[18px]">HealthOs Commerce</h4>
          </Link>
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
          {user && (
            <Link
              href="/dashboard"
              className="text-[16px] cursor-pointer ml-[25px] mobile:ml-[5px]"
            >
              Dashboard
            </Link>
          )}

          <Link
            href="/products"
            className="text-[16px] cursor-pointer ml-[25px] mobile:ml-[5px]"
          >
            Products
          </Link>
          {!user && (
            <>
              <Link
                href="/signup"
                className="text-[16px] cursor-pointer ml-[25px] mobile:ml-[5px]"
              >
                Sign Up
              </Link>
              <Link
                href="/signin"
                className="text-[16px] cursor-pointer ml-[25px] mobile:ml-[5px]"
              >
                Sign In
              </Link>
            </>
          )}
          <div className="text-[16px] cursor-pointer ml-[25px] mobile:ml-[5px]">
            <div className="relative" onClick={() => setCartIsOpen(true)}>
              <BsFillCartFill size="1.5em" />

              <div className="inline-flex absolute -top-[17px] -right-[17px] justify-center items-center w-6 h-6 text-xs font-bold text-[#000] ">
                {cartValue.totalQty}
              </div>
            </div>
          </div>
          {user && (
            <div>
              <img
                className="w-[27px] ml-[50px] cursor-pointer rounded-[50%] "
                onClick={toggleSetting}
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt=""
              />
              {settingsActive && (
                <ul className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-[#191919] bg-white border border-green-500 rounded-md shadow-md">
                  <li className="flex">
                    <Link
                      className="  inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      href="/dashboard"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      className=" inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      href="#"
                      onClick={logoutHandler}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      <span>Log out</span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      {cartIsOpen && <Cart />}
    </div>
  );
};

export default Navbar;

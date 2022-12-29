import React from 'react';
import Link from 'next/link';

import Image from 'next/image'
const HeroBanner = () => {
  return (
    <div className="mt-[50px] px-[40px] py-[100px] bg-[#F7F7F7] rounded-[15px] relative h-[500px] leading-[0.9] w-full">
      <div>
        <p className="text-[20px]">Capture your Memory</p>
        <h3 className='font-[48px] mt-[4px]'>60% OFF!!</h3>
        <h1 className='text-[#191919] text-[6em] uppercase -ml-[20px]'>Gorgeous</h1>
        <img src="https://www.kindpng.com/picc/m/190-1900264_gopro-camera-png-transparent-images-gopro-hero-5.png" alt="" className="hero-banner-image absolute top-[0] right-[10%] w-[600px]  "/>
        {/* <Image width={650} height={450}  src='https://www.kindpng.com/picc/m/190-1900264_gopro-camera-png-transparent-images-gopro-hero-5.png' alt="" className="hero-banner-image absolute top-[0] right-[20%] w-[450px] h-[450px] " /> */}


        <div>
          <Link href={`/product/`}>
            <button type="button" className='rounded-[15px] py-[10px] px-[16px] bg-[#f02d34] text-white border-none mt-[40px] text-[18px] font-normal pointer z-[100000]'>Shop Now</button>
          </Link>
          <div className="desc absolute right-[10%] bottom-[5%] w-[300px] flex flex-col text-[#324d67]">
            <h5 className='mb-[12px] font-bold text-[16px] self-end '>Description</h5>
            <p className='text-[#5f5f5f] font-[200] text-end'>Best machine to capture your past</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
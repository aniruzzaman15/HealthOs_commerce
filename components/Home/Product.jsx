import React from 'react';
import Link from 'next/link';



const Product = () => {
  return (
    <div>
      <Link href={`/product/`}>
        <div className="product-card pointer text-[#324d67]">
          <img
            src=''
            width={250}
            height={250}
            className="product-image rounded-[15px] bg-[#ebebeb]"
          />
          <p className="font-medium">{name}</p>
          <p className="font-extrabold mt-[6px] text-[#000]">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
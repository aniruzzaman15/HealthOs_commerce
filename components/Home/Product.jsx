import React from 'react';
import Link from 'next/link';



const Product = ({product}) => {
  return (
    <div>
      <Link href={`/products/1`}>
        <div className="product-card pointer text-[#324d67]">
          <img
            src={product.imageUrl}
            width={250}
            height={250}
            className="product-image rounded-[15px] bg-[#ebebeb]"
          />
          <p className="font-medium">{product.name}</p>
          <p className="font-extrabold mt-[6px] text-[#000]">{product.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
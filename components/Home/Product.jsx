import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'


const ProductDetail = ({product}) => {
  const router = useRouter()
  const query = router.query
  console.log('query',query)
  return (
    <div className='border-[1px] border-solid border-[#191919] hover:border-[red]  p-2 bg-[#fff] '>
      <Link href={`/products/${product.product_id}`}>
        <div className="product-card pointer text-[#324d67] bg-transparent">
          <img
            src={product.product_thumbnail}
            width={250}
            height={250}
            className="product-image rounded-[15px] bg-[#ebebeb] h-[200px] object-cover"
          />
          <p className="font-medium">{product.product_name}</p>
          <p className="font-extrabold mt-[6px] text-[#000]">{product.product_price} $</p>
          <p className="font-medium">Quantity: {product.product_qty}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductDetail
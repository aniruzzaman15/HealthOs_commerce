
import Navbar from '../components/Navbar/Navbar'
import HeroBanner from '../components/Home/HeroBannar'
import Footer from '../components/Home/Footer'
import Cart from '../components/cart/Cart'
import Product from '../components/Home/Product';

const products = [
  {
    name: "canon 105",
    imageUrl: "/image/hero.jpg",
    price: 20,
    rating: 4.9,
    createdAt: "12/01/22",
  },
  {
    name: "canon 105",
    imageUrl: "/image/hero.jpg",
    price: 20,
    rating: 4.9,
    createdAt: "12/01/22",
  },
  {
    name: "canon 105",
    imageUrl: "/image/hero.jpg",
    price: 20,
    rating: 4.9,
    createdAt: "12/01/22",
  },
  {
    name: "canon 105",
    imageUrl: "/image/hero.jpg",
    price: 20,
    rating: 4.9,
    createdAt: "12/01/22",
  },
  {
    name: "canon 105",
    imageUrl: "/image/hero.jpg",
    price: 20,
    rating: 4.9,
    createdAt: "12/01/22",
  },
  {
    name: "canon 105",
    imageUrl: "/image/hero.jpg",
    price: 20,
    rating: 4.9,
    createdAt: "12/01/22",
  },
  {
    name: "canon 105",
    imageUrl: "/image/hero.jpg",
    price: 20,
    rating: 4.9,
    createdAt: "12/01/22",
  },
];


export default function Home() {

  return (
    <>
    <Navbar/>
    <div className='container mx-auto'>
    <HeroBanner />
    <div className="text-center my-[40px] mx-[0] text-[#324d67]">
      <h2 className='text-[40px] font-extrabold'>Best Seller Products</h2>
      <p className='text-[16px] font-[200]'>speaker There are many variations passages</p>
    </div>

    <div className="products-container flex flex-wrap justify-center gap-[15px] mt-[20px] w-full">
      {products?.map((product) => <Product key={product.name} product={product} />)}
    </div>
    <Footer/>
  </div>
    </>
  )
}

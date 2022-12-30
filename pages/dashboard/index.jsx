import React, { useState , useEffect} from 'react'


import Image from 'next/image'
import ProductList from '../../components/admin/Product/productList';
import Overview from '../../components/admin/Overview';
import CustomerList from '../../components/admin/Customer/customerList';
import OrderList from '../../components/admin/Order/orderList';
import  Link  from 'next/link';
import { sidebar } from './../../lib/data';
import { useRouter } from 'next/router';
import { getRecoil } from 'recoil-nexus';
import { userState } from './../../State/State';



function DashBoard() {

  const [activeComponent, setActiveComponent] = useState( { name: "Overview", icon: './icons/overview.svg',id:'overview' });
  const router = useRouter()
  const selectTabHandler = (item) => {
    setActiveComponent(item)
  }

  // useEffect(()=>{
  //   if(!getRecoil(userState)){
  //     router.push('/')
  //   }
  // })

  return (
    <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
    <aside className="py-6 px-10 w-64 border-r border-gray-200">
      <Link href='/'>
      <h3 className='text-[22px] text-[#191919] my-[20px]'>HOS Commerce</h3>
      </Link>

      {
        sidebar.map((item,index)=>{
          return (
            <li key={index} className='list-none' onClick={()=>selectTabHandler(item)}>
            <a
              href="#"
              className={item.id === activeComponent.id ? 'flex gap-x-4 items-center py-2 text-gray-500   text-indigo-600 group' : 'flex gap-x-4 items-center py-2 text-gray-500'}
            >
              <span

                className={item.id === activeComponent.id ? 'absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full scale-y-100 translate-x-0 transition-transform ease-in-out' : 'absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full '}
              />

              <Image width={50} height={50} src={item.icon}/>
              <span>{ item.name }</span>
            </a>
          </li>
          )
        })
      }

    </aside>

    <main className="flex-1 pb-8">

    {activeComponent.id === 'overview' && <Overview/>}
    {activeComponent.id === 'product_list' && <ProductList/>}
    {activeComponent.id === 'customer_list' && <CustomerList/>}
    {activeComponent.id === 'order_list' && <OrderList/>}

    </main>
  </div>
  )
}

export default DashBoard





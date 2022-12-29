import React, { useState } from 'react'


import Image from 'next/image'
import ProductList from '../../components/admin/Product/productList';
import Overview from '../../components/admin/Overview';
import CustomerList from '../../components/admin/Customer/customerList';
import OrderList from '../../components/admin/Order/orderList';

const sidebar = [
    { name: "Overview", icon: './icons/overview.svg',id:'overview' },
    { name: "Products", icon: "./icons/shopping-bag.svg",id:'product_list' },
    { name: "Customers", icon: "./icons/shopping-bag.svg",id:'customer_list' },
    { name: "Orders", icon: "./icons/shopping-bag.svg",id:'order_list' }

];

function DashBoard() {

  const [activeComponent, setActiveComponent] = useState( { name: "Overview", icon: './icons/overview.svg',id:'overview' });

  const selectTabHandler = (item) => {
    setActiveComponent(item)
  }

  return (
    <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
    <aside className="py-6 px-10 w-64 border-r border-gray-200">
      <h3>HealthOs Commerce</h3>
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





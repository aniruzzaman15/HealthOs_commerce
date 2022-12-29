

import Image from 'next/image';
import React from 'react'
const orderList = [
    {
      name: "Canon 105",
      imageUrl:'/image/hero2.png',
      order_id: 20,
      price:1234,
      customer:'anir',
      date:'10-14-12'
    },
    {
        name: "Canon 105",
        imageUrl:'/image/hero2.png',
        order_id: 20,
        price:1234,
        customer:'anir',
        date:'10-14-12'
      },
      {
        name: "Canon 105",
        imageUrl:'/image/hero2.png',
        order_id: 20,
        price:1234,
        customer:'anir',
        date:'10-14-12'
      },
      {
        name: "Canon 105",
        imageUrl:'/image/hero2.png',
        order_id: 20,
        price:1234,
        customer:'anir',
        date:'10-14-12'
      },
      {
        name: "Canon 105",
        imageUrl:'/image/hero2.png',
        order_id: 20,
        price:1234,
        customer:'anir',
        date:'10-14-12'
      }


  ];
function OrderTable({selectOrderHandler}) {
  return (
    <table className="w-full border-b border-gray-200">
      <thead>
        <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
          <td className="pl-10">
            <div className="flex items-center gap-x-4">

              <span>Product Name</span>
            </div>
          </td>
          <td className="py-4 px-4 text-center">Order Id</td>
          <td className="py-4 px-4 text-center">Price</td>
          <td className="py-4 px-4 text-center">Customer</td>
          <td className="py-4 px-4 text-center">Date</td>

        </tr>
      </thead>
      <tbody>
        {
          orderList.map((order,index)=>{
            return (
              <tr
              className="hover:bg-gray-100 transition-colors group"
              onClick={()=>selectOrderHandler()}
            >
              <td className="flex gap-x-4 items-center py-4 pl-10">

                <img
                  src={order.imageUrl}
                  alt=""
                  className="w-[120px]  rounded-lg object-cover object-top border border-gray-200"
                />
                <div>
                  <a href="#" className="text-lg font-semibold text-gray-700">
                    { order.name }
                  </a>

                </div>
              </td>
              <td className="font-medium text-center">${ order.order_id }</td>
              <td className="font-medium text-center">${ order.price }</td>
              <td className="font-medium text-center">{ order.customer }</td>


              <td>
                <span className="inline-block w-20 group-hover:hidden">
                  { order.date }
                </span>
                <div
                  className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2"
                >
                  <button className="p-2 hover:rounded-md hover:bg-gray-200">

                    <Image width={24} height={24} src={'/icons/pencil.svg'}/>
                  </button>
                  <button className="p-2 hover:rounded-md hover:bg-gray-200">

                    <Image width={24} height={24} src={'/icons/trash.svg'}/>
                  </button>
                </div>
              </td>
            </tr>
            )

          })
        }

      </tbody>
    </table>
  )
}

export default OrderTable

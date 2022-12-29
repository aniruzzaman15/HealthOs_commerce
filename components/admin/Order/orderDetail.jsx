import React from 'react'

function OrderDetail({selectOrderHandler}) {
  return (
    <div className="bg-gray-100 pb-12">
    <button
      onClick={selectOrderHandler}
      className="block w-[200px] text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
    >
      Back to Order List
    </button>
    <div className="w-full text-white bg-main-color">
      <div className="container mx-auto justify-center my-5 p-5">
        <div className="w-full md:w-6/12  md:mx-2">
          <div className="bg-white p-3 ">
            <img
              className="w-[100px]  rounded-[50%] "
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <div className="image overflow-hidden">
              <img
                className="h-auto w-full mx-auto"
                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                alt=""
              />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              Order id
            </h1>
            <div className='flex justify-between w-full'>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              Product name
            </h1>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              Customer
            </h1>
            </div>



            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Total Buy</span>
                <span className="ml-auto">$4343</span>
              </li>
              <li className="flex items-center py-3">
                <span>Date</span>
                <span className="ml-auto">12-12-12</span>
              </li>
              <li className="flex items-center py-3">
                <span>Refundable</span>
                <span className="ml-auto">Yes</span>
              </li>
            </ul>
          </div>

          <div className="my-4"></div>
        </div>


      </div>
    </div>
  </div>
  )
}

export default OrderDetail

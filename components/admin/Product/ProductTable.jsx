import React, { useState } from "react";
import Image from "next/image";
import CreateItem from "./CreateItem";

const products = [
  {
    name: "Organic Landing page",
    category: "Web Design",
    imageUrl: "/img/organic-landing-page.png",
    price: 20,
    downloaded: 793,
    rating: 4.9,

    createdAt: "12/01/22",
  },
  {
    name: "Traffic Landing page",
    category: "Web Design",
    imageUrl: "/img/traffic-landing-page.png",
    price: 24,
    downloaded: 34,
    rating: 4.4,

    createdAt: "10/01/22",
  },
  {
    name: "POS Dashboard",
    category: "Web Design",
    imageUrl: "/img/pos-dashboard.png",
    price: 16,
    downloaded: 896,
    rating: 4.6,

    createdAt: "01/01/22",
  },
  {
    name: "Gallery page",
    category: "Web Design",
    imageUrl: "/img/gallery-page.png",
    price: 38,
    downloaded: 194,
    rating: 4.6,

    createdAt: "04/01/22",
  },
  {
    name: "WFH Landing page",
    category: "Web Design",
    imageUrl: "/img/wfh-landing-page.png",
    price: 22,
    downloaded: 404,
    rating: 4.3,

    createdAt: "12/12/21",
  },
];

function ProductTable({ selectProductHandler }) {
  const [createModal, setCreateModal] = useState(true);

  const createModalHandler = () => {
    console.log('hey')
    if (createModal) setCreateModal(false);
    else setCreateModal(true);
  };
  return (
    <>
      {createModal && <CreateItem />}
      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
            Products
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Let's grow to your business! Create your product and upload here
          </p>
        </div>
        <button
          onClick={()=>createModalHandler()}
          className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
        >
          {/* <PlusIcon className="w-6 h-6 fill-current" /> */}
          <span className="text-sm font-semibold tracking-wide">
          Add New Product
          </span>
        </button>
      </div>

      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <td className="pl-10">
              <div className="flex items-center gap-x-4">
                <input
                  type="checkbox"
                  className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                  indeterminate="indeterminate"
                />
                <span>Product Name</span>
              </div>
            </td>
            <td className="py-4 px-4 text-center">Pricing</td>
            <td className="py-4 px-4 text-center">Sold</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr
                className="hover:bg-gray-100 transition-colors group cursor-pointer"
                onClick={() => selectProductHandler()}
                key={index}
              >
                <td className="flex gap-x-4 items-center py-4 pl-10">
                  <input
                    type="checkbox"
                    className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                  />
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                  />
                  <div>
                    <a href="#" className="text-lg font-semibold text-gray-700">
                      {product.name}
                    </a>
                  </div>
                </td>
                <td className="font-medium text-center">${product.price}</td>
                <td className="font-medium text-center">
                  {product.downloaded}
                </td>

                <td>
                  <span className="inline-block w-20 group-hover:hidden">
                    {product.createdAt}
                  </span>
                  <div className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                    <button className="p-2 hover:rounded-md hover:bg-gray-200">
                      {/* <PencilIcon className="w-6 h-6 fill-current" /> */}
                      <Image width={24} height={24} src={"/icons/pencil.svg"} />
                    </button>
                    <button className="p-2 hover:rounded-md hover:bg-gray-200">
                      {/* <TrashIcon className="w-6 h-6 fill-current" /> */}
                      <Image width={24} height={24} src={"/icons/trash.svg"} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;

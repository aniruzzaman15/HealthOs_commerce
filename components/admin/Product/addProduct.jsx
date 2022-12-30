import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ProductsState } from "../../../State/State";
import { convertToBase64, notify } from './../../../lib/utils';
import { getRecoil, setRecoil } from 'recoil-nexus';
import { Upload } from "upload-js";
import { api_key } from './../../../config';

function AddProduct({ setCreateModal }) {

  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [progress, setProgress] = useState('');
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState(null)

  const upload = Upload({ apiKey: api_key }); // Your real API key.

  const onFileSelected = async (event) => {
    setUploading(true)
    const [ file ]  = event.target.files;
    const { fileUrl } = await upload.uploadFile(file, { onProgress });
    setUrl(fileUrl)
  }

  const onProgress = ({ progress }) => {
    console.log(`File uploading: ${progress}% complete.`)
    setProgress(progress)
    if(progress === 100) setUploading(false)
  }


  const addProductHandler = async () => {

    if(productName.length < 1 || productPrice.length < 1 || !url) {
      notify('All the field must be filled!')
      return
    }

    let dateTime = new Date().toISOString().slice(0, 10)
    let id = uuidv4();
    let productData = {
      product_name:productName,
      product_thumbnail:url,
      product_price:productPrice,
      product_qty:40,
      date:dateTime,
      product_id:id

    }

    let result = await fetch('/api/addProduct', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })

    if(result.ok){
      notify('Product uploaded Successfully')

      setRecoil(ProductsState,(oldState)=>{
        return [productData,...oldState ]
      })
      setCreateModal(false)
    }

  }
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.2)]  w-full p-4 flex justify-center items-center overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow-xl ">
          <div className="flex items-start justify-between p-4 border-b rounded-t ">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Add New Product
            </h3>
            <button
              onClick={() => setCreateModal(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-toggle="staticModal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <form
              className="space-y-4 md:space-y-6"

            >
              <div>
                <label
                  for="product_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Product Name
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e)=>setProductName(e.target.value)}
                  name="product_name"
                  id="product_name"
                  placeholder="product name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
              </div>

              <div>
                <label
                  for="product_thumbnail"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Product Thumbnail
                </label>
                <input
                  type="file"
                  name="product_thumbnail"
                  onChange={onFileSelected}
                  id="product_thumbnail"
                  placeholder="product name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
              </div>
              <div>
                <label
                  for="product_price"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Product price
                </label>
                <input
                  type="text"
                  name="product_price"
                  value={productPrice}
                  onChange={(e)=>setProductPrice(e.target.value)}
                  id="product_price"
                  placeholder="price..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
              </div>

              <button
                type="button"
                onClick={addProductHandler}
                disabled={uploading}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >

                {uploading ? `uploading asset ${progress}%` : 'Add' }
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

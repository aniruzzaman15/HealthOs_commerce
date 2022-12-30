import React from "react";
import { customers } from "../../../lib/data";

function CustomerTable({ selectCustomerHandler }) {
  return (
    <table className="w-full border-b border-gray-200">
      <thead>
        <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
          <td className="pl-10">
            <div className="flex items-center gap-x-4">
              <span>Customer Name</span>
            </div>
          </td>
          <td className="py-4 px-4 text-center">Total buy</td>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => {
          return (
            <tr
              className="hover:bg-gray-100 cursor-pointer transition-colors group"
              onClick={() => selectCustomerHandler(customer)}
            >
              <td className="flex gap-x-4 items-center py-4 pl-10">
                <img
                  className="w-[40px]  rounded-[50%] "
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                />

                <div>
                  <a href="#" className="text-xl font-semibold text-gray-700">
                    {customer.name}
                  </a>
                </div>
              </td>
              <td className="font-medium text-center">${customer.total_buy}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CustomerTable;

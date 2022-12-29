import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import OrderTable from './orderTable'
import { useState } from 'react';
import OrderDetail from './orderDetail';

function OrderList() {
  const [orderPageIsOpen, setOrderPageIsOpen] = useState(false);

  const selectOrderHandler = () => {
    if (orderPageIsOpen) setOrderPageIsOpen(false);
    else setOrderPageIsOpen(true);
  };
  return (
    <div>
  <DashboardNavbar/>
  <div className="mt-5">
        {!orderPageIsOpen && (
          <OrderTable selectOrderHandler={selectOrderHandler} />
        )}
        {orderPageIsOpen && (
          <OrderDetail selectOrderHandler={selectOrderHandler} />
        )}
      </div>
    </div>
  )
}

export default OrderList

import React from 'react'
import DashboardNavbar from './DashboardNavbar'

function OrderList() {
  return (
    <div>
  <DashboardNavbar/>
  <div className="mt-5">
        {!profilePageIsOpen && (
          <CustomerTable selectCustomerHandler={selectCustomerHandler} />
        )}
        {profilePageIsOpen && (
          <ProfilePage selectCustomerHandler={selectCustomerHandler} />
        )}
      </div>
    </div>
  )
}

export default OrderList

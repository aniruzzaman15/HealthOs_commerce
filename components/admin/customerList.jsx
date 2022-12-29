import Image from "next/image";
import React, { useState } from "react";
import CustomerDetail from "./customerDetail";
import CustomerTable from "./customerTable";
import DashboardNavbar from "./DashboardNavbar";


function CustomerList() {
  const [profilePageIsOpen, setProfilePageIsOpen] = useState(false);

  const selectCustomerHandler = () => {
    if (profilePageIsOpen) setProfilePageIsOpen(false);
    else setProfilePageIsOpen(true);
  };
  return (
    <div>
      <DashboardNavbar />
      <div className="mt-5">
        {!profilePageIsOpen && (
          <CustomerTable selectCustomerHandler={selectCustomerHandler} />
        )}
        {profilePageIsOpen && (
          <CustomerDetail selectCustomerHandler={selectCustomerHandler} />
        )}
      </div>
    </div>
  );
}

export default CustomerList;

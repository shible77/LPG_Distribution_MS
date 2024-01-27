import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./SideBar.css";

function SideBar(props) {
  const location = useLocation();
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    if (accordionId === activeAccordion) {
      // If the same accordion is clicked again, collapse it
      setActiveAccordion(null);
    } else {
      setActiveAccordion(accordionId);
    }
  };
  
  return (
    <div style={{ marginTop: "4rem" }}>
      <div className="sidebar">
        <NavLink
          activeclassname="active"
          to="/home/userManagement"
          className="font"
        >
          <i className="fa fa-fw fa-users"></i>User Management
        </NavLink>
        <NavLink activeclassname="active" to="/home/contacts" className="font">
          <i className="fa fa-fw fa-address-book-o"></i>Contacts
        </NavLink>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className={`accordion-button ${
                  activeAccordion === "flush-collapseOne" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionClick("flush-collapseOne")}
              >
                <i className="fa fa-fw fa-user-o"></i>Employees
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className={`accordion-collapse collapse ${
                activeAccordion === "flush-collapseOne" ? "show" : ""
              }`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ padding: 0 }}>
                <NavLink
                  activeclassname="active"
                  to="/home/employee"
                  className="font"
                >
                  <i className="fa fa-fw fa-user" aria-hidden="true"></i>
                  Employees
                </NavLink>
                <NavLink
                  activeclassname="active"
                  to="/home/addEmployee"
                  className="font"
                >
                  <i className="fa fa-fw fa-user-plus" aria-hidden="true"></i>
                  Add Employees
                </NavLink>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
               className={`accordion-button ${
                activeAccordion === "flush-collapseTwo" ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => handleAccordionClick("flush-collapseTwo")}
              >
                <i className="fa fa-fw fa-cubes"></i>Products
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className={`accordion-collapse collapse ${
                activeAccordion === "flush-collapseTwo" ? "show" : ""
              }`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ padding: 0 }}>
                <NavLink
                  activeclassname="active"
                  to="/home/products"
                  className="font"
                >
                  <i className="fa fa-fw fa-cube"></i>Products
                </NavLink>
                <NavLink
                  activeclassname="active"
                  to="/home/addProducts"
                  className="font"
                >
                  <i className="fa fa-fw fa-plus-square-o"></i>Add Products
                </NavLink>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  activeAccordion === "flush-collapseThree" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionClick("flush-collapseThree")}
              >
                <i className="fa fa-fw fa-arrow-down"></i>Purchases
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className={`accordion-collapse collapse ${
                activeAccordion === "flush-collapseThree" ? "show" : ""
              }`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ padding: 0 }}>
                <NavLink
                  activeclassname="active"
                  to="/home/listPurchases"
                  className="font"
                >
                  <i className="fa fa-list-ol" aria-hidden="true"></i> List of
                  Purchases
                </NavLink>
                <NavLink
                  activeclassname="active"
                  to="/home/addPurchases"
                  className="font"
                >
                  <i className="fa fa-cart-plus" aria-hidden="true"></i> Add
                  Purchases
                </NavLink>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  activeAccordion === "flush-collapseFourth" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionClick("flush-collapseFourth")}
              >
                <i className="fa fa-fw fa-arrow-up"></i>Sell
              </button>
            </h2>
            <div
              id="flush-collapseFourth"
              className={`accordion-collapse collapse ${
                activeAccordion === "flush-collapseFourth" ? "show" : ""
              }`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ padding: 0 }}>
                <NavLink
                  activeclassname="active"
                  to="/home/listSales"
                  className="font"
                >
                  <i className="fa fa-list-ul" aria-hidden="true"></i> List of
                  Sales
                </NavLink>
                <NavLink
                  activeclassname="active"
                  to="/home/sellsSummary"
                  className="font"
                >
                  <i className="fa fa-window-maximize" aria-hidden="true"></i>{" "}
                  Sells Summary
                </NavLink>
                <NavLink
                  activeclassname="active"
                  to="/home/addSale"
                  className="font"
                >
                  <i className="fa fa-plus-square" aria-hidden="true"></i> Add
                  Sale
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <NavLink activeclassname="active" to="/home/accounts" className="font">
          <i className="fa fa-fw fa-calculator"></i>Accounts
        </NavLink>
        <NavLink
          activeclassname="active"
          to="/home/contactReports"
          className="font"
        >
          <i className="fa fa-fw fa-file-text"></i>Contact Reports
        </NavLink>
        <NavLink
          activeclassname="active"
          to="/home/stockTransfer"
          className="font"
        >
          <i className="fa fa-fw fa-truck"></i>Stock Transfer
        </NavLink>
        <NavLink
          activeclassname="active"
          to="/home/stockAdjustment"
          className="font"
        >
          <i className="fa fa-fw fa-database"></i>Stock Adjustment
        </NavLink>
        <NavLink activeclassname="active" to="/home/exchange" className="font">
          <i className="fa fa-fw fa-exchange"></i>Exchanges
        </NavLink>
        <NavLink activeclassname="active" to="/home/cylinder" className="font">
          <i className="fa fa-fw fa-arrow-circle-up"></i>Cylinder Track
        </NavLink>
        <NavLink activeclassname="active" to="/home/expanses" className="font">
          <i className="fa fa-fw fa-minus-circle"></i>Expanses
        </NavLink>
        <NavLink activeclassname="active" to="/home/income" className="font">
          <i className="fa fa-fw fa-plus-circle"></i>Income
        </NavLink>
      </div>
      <div className="content">
        {location.pathname === "/home" ? (
          <h1 style={{ marginTop: "13rem" }}>{`Welcome ${props.userName}`}</h1>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default SideBar;
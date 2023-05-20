import React from "react";
import "../header/Navbar.css";
// import classes from "../header/Navbar.css";
import logo from "../images/logo.svg";
import speedometer from "../images/5925631_meter_speed_speedometer_icon.png";
import user from "../images/person-fill.svg";
import paper from "../images/newspaper.png";
import setting from "../images/icons8-gear-50.png";
import table from "../images/icons8-table-30.png";
import location from "../images/icons8-location-50.png";
import report from "../images/icons8-news-30.png";
import Dropdown from "react-bootstrap/Dropdown";
import password from "../images/1564520_code_open_password_icon.png";
import logout from "../images/42283_power_on_off_logout_shutdown_icon.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const dashBoard = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div className="navLogo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="navDetails">
        <div className="navList">
          <img
            className="speedometer"
            src={speedometer}
            alt="speedometer_logo"
          />
          <span onClick={dashBoard}>Dashboard</span>
        </div>
        <div className="navList">
          <div>
            <img className="user" src={user} alt="user_logo" />
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="default" id="dropdown-basic">
                Users
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/gm">Manage GM</Dropdown.Item>
                <Dropdown.Item href="/shq">Manage SHQ</Dropdown.Item>
                <Dropdown.Item href="/branch">Manage Branches</Dropdown.Item>
                <Dropdown.Item href="/sales">
                  Manage Sales Engineers
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="navList">
          <img className="paper" src={paper} alt="paper_logo" />
          <span onClick={() => navigate("/others")}>Sales Order</span>
        </div>
        <div className="navList">
          <img className="location" src={location} alt="location_logo" />
          <span onClick={() => navigate("/track")}>Track Users</span>
        </div>
        <div className="navList">
          <img className="user" src={user} alt="user_logo" />
          <Dropdown>
            <Dropdown.Toggle variant="default" id="dropdown-basic">
              Masters
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/account">Account Number</Dropdown.Item>
              <Dropdown.Item href="/fob">Fob</Dropdown.Item>
              <Dropdown.Item href="/freight">Freight Terms</Dropdown.Item>
              <Dropdown.Item href="/orderType">Order Type</Dropdown.Item>
              <Dropdown.Item href="/shippingMethod">
                Shipping Method
              </Dropdown.Item>

              <Dropdown.Item href="/tax">Tax</Dropdown.Item>
              <Dropdown.Item href="/transactionType">
                Transaction Type
              </Dropdown.Item>
              <Dropdown.Item href="/warehouse">Warehouse</Dropdown.Item>
              <Dropdown.Item href="/priceList">Price List</Dropdown.Item>
              <Dropdown.Item href="/paymentTerms">Payment Terms</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="navList">
          <img className="setting" src={setting} alt="setting_logo" />
          <Dropdown>
            <Dropdown.Toggle variant="default" id="dropdown-basic">
              Setting
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/Account Number setting">
                Account Number
              </Dropdown.Item>
              <Dropdown.Item href="/fob setting">Fob</Dropdown.Item>
              <Dropdown.Item href="/freight setting">Freight</Dropdown.Item>
              <Dropdown.Item href="/orderType Setting">
                Order Type
              </Dropdown.Item>
              <Dropdown.Item href="/price Setting">Price List</Dropdown.Item>
              <Dropdown.Item href="/shippingList Setting">
                Shipping List
              </Dropdown.Item>
              <Dropdown.Item href="/transactionSetting">
                Transaction Type
              </Dropdown.Item>
              <Dropdown.Item href="/tax setting">Tax</Dropdown.Item>
              <Dropdown.Item href="/warehouse setting">Warehouse</Dropdown.Item>
              <Dropdown.Item href="/payment setting">Payment</Dropdown.Item>
              <Dropdown.Item href="/product setting">
                Product Details
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="navList">
          <img className="masterTable" src={table} alt="table_logo" />
          <Dropdown>
            <Dropdown.Toggle variant="default" id="dropdown-basic">
              Master Table
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/tableAccount">Account Number</Dropdown.Item>
              <Dropdown.Item href="/tableFob">Fob</Dropdown.Item>
              <Dropdown.Item href="/tableFreight">Freight</Dropdown.Item>
              <Dropdown.Item href="/tableOrder">Order Type</Dropdown.Item>
              <Dropdown.Item href="/tablePrice">Price List</Dropdown.Item>
              <Dropdown.Item href="/tableShipping">Shipping List</Dropdown.Item>
              <Dropdown.Item href="/tableTransaction">
                Transaction Type
              </Dropdown.Item>
              <Dropdown.Item href="/tableTax">Tax</Dropdown.Item>
              <Dropdown.Item href="/tableWareHouse">Warehouse</Dropdown.Item>
              <Dropdown.Item href="/tablePayment">Payment</Dropdown.Item>
              <Dropdown.Item href="/tableproduct">
                Product Details
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="navList">
          <img className="report" src={report} alt="report_logo" />
          <Dropdown>
            <Dropdown.Toggle variant="default" id="dropdown-basic">
              Reports
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/conversionReport">
                Conversion Report
              </Dropdown.Item>
              <Dropdown.Item href="/lineReport">Line Report</Dropdown.Item>

              <Dropdown.Item href="/others">Others</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="navList">
        <Dropdown>
          <Dropdown.Toggle variant="default" id="dropdown-basic">
            Super Admin
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/changePassword">
              <img className="password" src={password} alt="password_icon" />
              Change Password
            </Dropdown.Item>
            <Dropdown.Item href="/updateProfile">
              <img src={user} alt="user_icon" />
              Profile update
            </Dropdown.Item>
            <Dropdown.Item href="/logIn">
              <img className="logout" src={logout} alt="logout_icon" />
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;

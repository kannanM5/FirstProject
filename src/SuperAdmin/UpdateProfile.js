import React from "react";
import { useNavigate } from "react-router-dom";
import "../SuperAdmin/superAdmin.css";
import eye from "../images/eye.png";

export default function UpdateProfile() {
  const navigate = useNavigate();

  const dashBoard = () => {
    navigate("/");
  };
  return (
    <>
      <div className="alignContent">
        <div className="selectAllContent">
          <div className="top_title">
            <div>
              <h3>Update Profile</h3>
            </div>

            <div>
              <button onClick={() => navigate("/")} className="BackBtn">
                Back
              </button>
            </div>
          </div>
          <span onClick={dashBoard} className="moveDashBoard">
            Dashboard
          </span>
          <span className="subTitle"> / Update Profile</span>

          <div className="highLight">
            <div className="setting_search_boxes">
              <div className="inputFieldPrice">
                <label className="labelSet">Name</label> <br />
                <input className="input" type="text" />
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet">Address</label> <br />
                <input className="input" type="text" placeholder="Address" />
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet">Phone Number</label> <br />
                <input
                  className="input"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet">Email ID</label>

                <br />
                <input className="input" type="text" />
              </div>
            </div>

            <div className="setting_search_boxes">
              <div className="inputFieldPrice3">
                <label className="labelSet">Email Password</label>
                <sup>
                  <img className="eye" src={eye} alt="eye" />
                </sup>

                <br />
                <input className="input" type="text" />
              </div>

              <div className="inputFieldPrice3">
                <label className="labelSet">Fax</label>
                <br />
                <input className="input" type="text" placeholder="fax" />
              </div>
            </div>
            <div className="btnSubmit">
              <button className="submitBtn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

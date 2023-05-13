import React from "react";
import { useNavigate } from "react-router-dom";
import "../SuperAdmin/superAdmin.css";
import star from "../images/icons8-star-30.png";

export default function ChangePassword() {
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
              <h3>Change Password</h3>
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
          <span className="subTitle"> / Change Password</span>

          <div className="highLight">
            <div className="setting_search_boxes">
              <div className="inputFieldPrice">
                <label className="labelSet">Current Password</label>
                <sup>
                  <img className="star" src={star} alt="star" />
                </sup>
                <br />
                <input
                  className="input"
                  type="text"
                  placeholder="Current Password..."
                />
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet">New Password</label>
                <sup>
                  <img className="star" src={star} alt="star" />
                </sup>
                <br />
                <input
                  className="input"
                  type="text"
                  placeholder="New Password"
                />
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet">Confirm Password</label>
                <sup>
                  <img className="star" src={star} alt="star" />
                </sup>
                <br />
                <input
                  className="input"
                  type="text"
                  placeholder="Confirm Password..."
                />
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

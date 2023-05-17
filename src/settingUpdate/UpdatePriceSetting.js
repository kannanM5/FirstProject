import React from "react";
import { useNavigate } from "react-router-dom";
import "../settings/setting.css";

export default function UpdatePriceSetting() {
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
              <span onClick={dashBoard} className="moveDashBoard">
                Dashboard
              </span>
              <span className="subTitle"> / Price List Master</span>
            </div>
          </div>

          <div className="highLight">
            <div className="row ">
              <div className="col-4 inputFieldAcc">
                <label className="labelSet">Price List ID</label>
                <br />
                <input className="input" type="text" />
              </div>
              <div className="col-4 inputFieldAcc">
                <label className="labelSet">Price List</label> <br />
                <input className="input" type="text" />
              </div>
              <div className="col-4 inputFieldAcc">
                <label className="labelSet">Order Type ID</label> <br />
                <input className="input" type="text" />
              </div>
            </div>
            <button className="btn btn-success save">Save</button>
            <button
              onClick={() => navigate("/price Setting")}
              className="btn btn-danger save"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

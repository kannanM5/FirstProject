import React from "react";
import { useNavigate } from "react-router-dom";
import "../settings/setting.css";

export default function AccountSetting() {
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
              <span className="subTitle"> / Account Master</span>
            </div>
          </div>

          <div className="highLight">
            <div className="row ">
              <div className="col-4 inputFieldAcc">
                <label className="labelSet">Customer Number</label>
                <br />
                <input className="input" type="text" />
              </div>
              <div className="col-4 inputFieldAcc">
                <label className="labelSet">Account Number</label> <br />
                <input className="input" type="text" />
              </div>
              <div className="col-4 inputFieldAcc">
                <label className="labelSet">Gst No</label> <br />
                <input className="input" type="text" />
              </div>
            </div>
            <button className="btn btn-success save">Save</button>
            <button
              onClick={() => navigate("/Account Number setting")}
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

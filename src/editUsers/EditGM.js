import React from "react";
import { useNavigate } from "react-router-dom";
import star from "../images/icons8-star-30.png";
import "../settings/setting.css";

export default function EditGM() {
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
              <h3>Update GM</h3>
            </div>

            <div>
              <button
                onClick={() => navigate("/gm")}
                className=" btn btn-danger plusBtn"
              >
                Back
              </button>
            </div>
          </div>

          <span onClick={dashBoard} className="moveDashBoard">
            Dashboard
          </span>
          <span className="subTitle"> / GM / Update</span>
          <div className="highLight">
            <div className="row ">
              <div className="col-3 inputFieldAcc">
                <label className="labelSet">Name</label>
                <sup>
                  <img className="star" src={star} alt="star" />
                </sup>
                <br />
                <input className="input" type="text" />
              </div>
              <div className="col-3 inputFieldAcc">
                <label className="labelSet">Mobile</label>{" "}
                <sup>
                  <img className="star" src={star} alt="star" />
                </sup>
                <br />
                <input className="input" type="text" />
              </div>
              <div className="col-3 inputFieldAcc">
                <label className="labelSet">Email ID</label>
                <sup>
                  <img className="star" src={star} alt="star" />
                </sup>
                <br />
                <input className="input" type="text" />
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

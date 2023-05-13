import React from "react";
import { useNavigate } from "react-router-dom";
import star from "../images/icons8-star-30.png";
import "../masters/masters.css";

export default function PaymentDetail() {
  const navigate = useNavigate();

  const dashBoard = () => {
    navigate("/", {
      state: "test",
    });
  };
  return (
    <>
      <div className="alignContent">
        <div className="selectAllContent">
          <div className="top_title">
            <div>
              <h3>Payment Terms Import</h3>
            </div>

            <div></div>
          </div>
          <span onClick={dashBoard} className="moveDashBoard">
            Dashboard
          </span>
          <span className="subTitle"> / Payment Terms Import</span>

          <div className="highLight">
            <div className="chooseFile">
              <label className="labelFile" htmlFor="importFile">
                File Import
              </label>
              <sup>
                <img className="star" src={star} alt="star" />
              </sup>
            </div>
            <div>
              <input className="fileChose" type="file" />
            </div>
            <div>
              <button className="importBtn">Import</button>
            </div>

            <h3 className="tileSample">Sample File</h3>

            <p className="download">Download</p>
          </div>

          <div className="highLight">
            <div className="lastSection1">
              <div></div>

              <div>
                <strong>Items per page</strong>
                <select className="selectNumber">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>

            <div>
              <table className="table table-bordered table-responsive">
                <thead>
                  <tr className="table-primary">
                    <td>1</td>
                    <td>File Name</td>
                    <td> Uploaded By</td>
                    <td> Created At</td>
                    <td> Log Status</td>
                    <td> Log file download</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="6"> No results found.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

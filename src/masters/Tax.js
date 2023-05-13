import React from "react";
import { useNavigate } from "react-router-dom";
import star from "../images/icons8-star-30.png";
import "../masters/masters.css";

export default function Tax() {
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
              <h3>Tax Import</h3>
            </div>

            <div></div>
          </div>
          <span onClick={dashBoard} className="moveDashBoard">
            Dashboard
          </span>
          <span className="subTitle"> / Tax Import</span>

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
              <div>
                showing <strong>1-2</strong> of <strong>2</strong> items.
              </div>

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
                    <td>1</td>
                    <td> tax_code_master.ods</td>
                    <td> Super Admin</td>
                    <td> 2022-08-08 18:02:17</td>
                    <td> success</td>
                    <td>-</td>
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

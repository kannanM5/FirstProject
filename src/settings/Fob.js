import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import EditToolTip from "../toolTip/EditToolTip";
import DeleteToolTip from "../toolTip/DeleteToolTip";
import "../settings/setting.css";

export default function FobSetting() {
  const navigate = useNavigate();

  const dashBoard = () => {
    navigate("/", {});
  };

  return (
    <>
      <div className="alignContent1">
        <div className="selectAllContent1">
          <div className="top_title">
            <div>
              <span onClick={dashBoard} className="moveDashBoard">
                Dashboard
              </span>
              <span className="subTitle"> / FOB Master</span>
            </div>
            <div>
              <button
                onClick={() => navigate("/UpdateFobSetting")}
                className="createBtnSet"
              >
                Create
              </button>
            </div>
          </div>

          <div className="highLight">
            <div className="setting_search_boxes">
              <div className="inputFieldFob">
                <label className="labelSet">Fob Code</label>
                <br />
                <input className="input" type="text" />
              </div>

              <div className="inputFieldFob">
                <label className="labelSet">Description</label> <br />
                <input className="input" type="text" />
              </div>
            </div>
            <button className="searchBtnSet">Search</button>
            <button className="resetBtnSet">Reset</button>

            <div className="lastSection1">
              <div>
                Showing <strong>1-5</strong> of <strong>5</strong> items.
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
                    <th>S.No</th>
                    <th>Fob Code</th>
                    <th> Description</th>
                    <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>C & F Price</td>
                    <td> C & F Priceasda</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editFob")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>C.F.R Price</td>
                    <td> C.F.R Price</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editFob")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>C & F Chennai (Madras) Price</td>
                    <td> C & F Chennai (Madras) Price</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editFob")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>C.F.R Chennai (Madras) Price</td>
                    <td> C.F.R Chennai (Madras) Price</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editFob")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td> C.I.F Chennai (Madras) Price F.O.B Price</td>
                    <td>C.I.F Chennai (Madras) Price F.O.B Price</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editFob")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
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

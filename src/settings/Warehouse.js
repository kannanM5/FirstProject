import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import EditToolTip from "../toolTip/EditToolTip";
import DeleteToolTip from "../toolTip/DeleteToolTip";
import "../settings/setting.css";

export default function WarehouseSetting() {
  const navigate = useNavigate();

  const dashBoard = () => {
    navigate("/");
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
              <span className="subTitle"> / Warehouse Master</span>
            </div>
            <div>
              <button
                onClick={() => navigate("/updateWare")}
                className="createBtnSet"
              >
                Create
              </button>
            </div>
          </div>

          <div className="highLight">
            <div className="setting_search_boxes">
              <div className="inputFieldFob">
                <label className="labelSet">Ware House Code</label>
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
                Showing <strong>1-4</strong> of <strong>4</strong> items.
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
                    <th>Warehouse Code</th>
                    <th> Description</th>
                    <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Unit 1</td>
                    <td> Unit 1</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editWareHouse")}>
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
                    <td>Unit 2</td>
                    <td> Unit 2</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editWareHouse")}>
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
                    <td>Unit 3</td>
                    <td> Unit 3</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editWareHouse")}>
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
                    <td>Corporate Office</td>
                    <td> Corporate Office</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editWareHouse")}>
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

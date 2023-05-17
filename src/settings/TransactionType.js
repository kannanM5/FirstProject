import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import EditToolTip from "../toolTip/EditToolTip";
import DeleteToolTip from "../toolTip/DeleteToolTip";
import "../settings/setting.css";

export default function TransactionTypeSetting() {
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
              <span className="subTitle"> / Transaction Master</span>
            </div>
            <div>
              <button
                onClick={() => navigate("/updateTransaction")}
                className="createBtnSet"
              >
                Create
              </button>
            </div>
          </div>

          <div className="highLight">
            <div className="setting_search_boxes">
              <div className="inputFieldPrice">
                <label className="labelSet">Transaction Type</label>
                <br />
                <input className="input" type="text" />
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet">Order Type</label> <br />
                <input className="input" type="text" />
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet">Description</label> <br />
                <input className="input" type="text" />
              </div>
            </div>
            <button className="searchBtnSet">Search</button>
            <button className="resetBtnSet">Reset</button>

            <div className="lastSection1">
              <div>
                Showing <strong>1-9</strong> of <strong>9</strong> items.
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
                    <th> Transaction Type</th>
                    <th> Order Type</th>
                    <th> Description</th>
                    <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>DEPO REPAIR-CBE</td>
                    <td>DEPO REPAIR-CBE</td>
                    <td> DEPO REPAIR-CBE</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/edittransaction")}>
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
                    <td>DEPO REPAIR-GNT</td>
                    <td>DEPO REPAIR-GNT</td>
                    <td>DEPO REPAIR-GNT</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/edittransaction")}>
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
                    <td> DEPO REPAIR-MDU</td>
                    <td> DEPO REPAIR-MDU</td>
                    <td> DEPO REPAIR-MDU</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/edittransaction")}>
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
                    <td>DEPO REPAIR-PNP</td>
                    <td> DEPO REPAIR-PNP</td>
                    <td> DEPO REPAIR-PNP</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/edittransaction")}>
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
                    <td>DOMESTIC SALES U-1</td>
                    <td> DOMESTIC SALES U1 UPTO280222</td>
                    <td> DOMESTIC SALES U-1</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/edittransaction")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td> DOMESTIC SALES U-1</td>
                    <td>DOMESTIC SALES UNIT-1</td>
                    <td> DOMESTIC SALES U-1</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/edittransaction")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td> DOMESTIC SALES U-3</td>
                    <td> DOMESTIC SALES U3 UPTO280222</td>
                    <td> DOMESTIC SALES U-3</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/edittransaction")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td> DOMESTIC SALES U-3</td>
                    <td> DOMESTIC SALES UNIT-3</td>
                    <td> DOMESTIC SALES U-3</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/edittransaction")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td> DOMESTIC SALES U-4</td>
                    <td> DOMESTIC SALES UNIT-4</td>
                    <td>DOMESTIC SALES U-4</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/edittransaction")}>
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

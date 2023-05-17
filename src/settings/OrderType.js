import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import EditToolTip from "../toolTip/EditToolTip";
import DeleteToolTip from "../toolTip/DeleteToolTip";
import "../settings/setting.css";

export default function OrderTypeSetting() {
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
              <span className="subTitle"> / Order Type Master</span>
            </div>
            <div>
              <button
                onClick={() => {
                  navigate("/updateOrder");
                }}
                className="createBtnSet"
              >
                Create
              </button>
            </div>
          </div>

          <div className="highLight">
            <div className="setting_search_boxes">
              <div className="inputFieldFob">
                <label className="labelSet">Order Type ID</label>
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
                Showing <strong>1-20</strong> of <strong>31</strong> items.
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
                    <th>Order Type</th>
                    <th>Description</th>
                    <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>COMMERCIAL ITEMS SALES-UNIT 4 </td>
                    <td> COMMERCIAL ITEMS SALES-UNIT 4 </td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
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
                    <td>COMMERCIAL ITEMS SALES-UNIT 3 </td>
                    <td> COMMERCIAL ITEMS SALES-UNIT 3 </td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
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
                    <td> DOMESTIC QUOTE UNIT-4 </td>
                    <td> DOMESTIC QUOTE UNIT-4 </td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
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
                    <td> DOMESTIC QUOTE UNIT-1</td>
                    <td> DOMESTIC QUOTE UNIT-1</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
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
                    <td> COMMERCIAL ITEMS SALES-UNIT 1 </td>
                    <td> COMMERCIAL ITEMS SALES-UNIT 1 </td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
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
                    <td> EXPORT SALES-UNIT 1</td>
                    <td>EXPORT SALES-UNIT 1</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
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
                    <td> SALES DEPOT-PNP</td>
                    <td> SALES DEPOT-PNP</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
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
                    <td>SALES DEPOT-MDU</td>
                    <td> SALES DEPOT-MDU</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
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
                    <td> SALES DEPOT-GNT</td>
                    <td> SALES DEPOT-GNT</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td> SALES DEPOT-CBE</td>
                    <td> SALES DEPOT-CBE</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td> NEPAL PRICE LIST-U4</td>
                    <td> NEPAL PRICE LIST-U4</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td> NEPAL PRICE LIST-U3</td>
                    <td>NEPAL PRICE LIST-U3</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td> NEPAL PRICE LIST-U1</td>
                    <td>NEPAL PRICE LIST-U1</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>LMW</td>
                    <td> LMW</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td> FIELD SERVICE</td>
                    <td> FIELD SERVICE</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>EXPORT SALES-UNIT 4</td>
                    <td> EXPORT SALES-UNIT 4</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td> DEPO REPAIR-CBE</td>
                    <td> DEPO REPAIR-CBE</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td> EXPORT PRICE LIST-EURO-U4</td>
                    <td> EXPORT PRICE LIST-EURO-U4</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td> EXPORT PRICE LIST-EURO-U3</td>
                    <td> EXPORT PRICE LIST-EURO-U3</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td> EXPORT PRICE LIST-EURO-U1</td>
                    <td> EXPORT PRICE LIST-EURO-U1</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editOrder")}>
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
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>

                  <li class="page-item">
                    <a class="page-link" href="#">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

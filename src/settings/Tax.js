import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import EditToolTip from "../toolTip/EditToolTip";
import DeleteToolTip from "../toolTip/DeleteToolTip";
import "../settings/setting.css";

export default function TaxSetting() {
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
              <span className="subTitle"> / Tax Master</span>
            </div>
            <div>
              <button
                onClick={() => navigate("/updateTax")}
                className="createBtnSet"
              >
                Create
              </button>
            </div>
          </div>

          <div className="highLight">
            <div className="setting_search_boxes">
              <div className="inputFieldPrice">
                <label className="labelSet">Tax Code</label>
                <br />
                <input className="input" type="text" />
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet">Tax Value</label> <br />
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
                Showing <strong>1-20</strong> of <strong>91</strong> items.
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
                    <th> Tax Code</th>
                    <th> Tax Value</th>
                    <th> Description</th>
                    <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>INTERSTATE 12 (IGST)REC</td>
                    <td> 12.00</td>
                    <td> INTERSTATE 12 (IGST)REC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td>INTERSTATE 5 (IGST)NONREC</td>
                    <td>5.00</td>
                    <td> INTERSTATE 5 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 5 (IGST)REC</td>
                    <td> 5.00</td>
                    <td>INTERSTATE 5 (IGST)REC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> CUSTOM DUTY@5</td>
                    <td> 5.00</td>
                    <td> CUSTOM DUTY@5</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td>CUSTOM DUTY@7.5</td>
                    <td> 7.50</td>
                    <td> CUSTOM DUTY@7.5</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 3 (IGST)REC</td>
                    <td> 3.00</td>
                    <td> INTERSTATE 3 (IGST)REC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> CUSTOM DUTY@0</td>
                    <td> 0.00</td>
                    <td> CUSTOM DUTY@0</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> CUSTOM DUTY@20</td>
                    <td>20.00</td>
                    <td> CUSTOM DUTY@20</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editTax")}>
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
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      5
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

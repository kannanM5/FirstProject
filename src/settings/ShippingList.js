import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import EditToolTip from "../toolTip/EditToolTip";
import DeleteToolTip from "../toolTip/DeleteToolTip";
import "../settings/setting.css";

export default function ShippingListSetting() {
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
              <span className="subTitle"> / Shipping Master</span>
            </div>
            <div>
              <button
                onClick={() => navigate("/updateShipping")}
                className="createBtnSet"
              >
                Create
              </button>
            </div>
          </div>

          <div className="highLight">
            <div className="setting_search_boxes">
              <div className="inputFieldFob">
                <label className="labelSet">Customer Number</label>
                <br />
                <input className="input" type="text" />
              </div>
              <div className="inputFieldFob">
                <label className="labelSet">Account Number</label> <br />
                <input className="input" type="text" />
              </div>
            </div>
            <button className="searchBtnSet">Search</button>
            <button className="resetBtnSet">Reset</button>

            <div className="lastSection1">
              <div>
                Showing <strong>1-20</strong> of <strong>141</strong> items.
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
                    <th> Shipping Method</th>
                    <th> Description</th>
                    <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td> SRI ANNAMALAI TRANSPORT</td>
                    <td> SRI ANNAMALAI TRANSPORT</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td>SAVANI TRANSPORT</td>
                    <td> SAVANI TRANSPORT</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td>SARAVANAA TRANSPORT</td>
                    <td> SARAVANAA TRANSPORT</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td>S.M.P. TRAVELS</td>
                    <td>S.M.P. TRAVELS</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td>SOUTH EASTERN</td>
                    <td>SOUTH EASTERN</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td> ROYAL INDIA ROADWAYS</td>
                    <td> ROYAL INDIA ROADWAYS</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td> Patel Roadways Ltd</td>
                    <td> Patel Roadways Ltd</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td> SRI BALAJI EXPRESS CARGO</td>
                    <td> SRI BALAJI EXPRESS CARGO</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td> PRAKASH COURIER</td>
                    <td> PRAKASH COURIER</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td>SPEED EXPRESS</td>
                    <td> SPEED EXPRESS</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td> XPS CARGO</td>
                    <td> XPS CARGO</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td> ROAD TRANSPORT CO</td>
                    <td> ROAD TRANSPORT CO</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td> PROFESSIONAL COURIER</td>
                    <td>PROFESSIONAL COURIER</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td>S.R.FREIGHT CARRIERS</td>
                    <td>S.R.FREIGHT CARRIERS</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td> ROYAL GOLDEN TRANSPORT</td>
                    <td> ROYAL GOLDEN TRANSPORT</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td> SOUTHERN ROADWAYS</td>
                    <td> SOUTHERN ROADWAYS</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td> SRI GANESH ROADLINES</td>
                    <td> SRI GANESH ROADLINES</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td> RANGA VILAS</td>
                    <td> RANGA VILAS</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td> SAFEXPRESS P LTD</td>
                    <td> SAFEXPRESS P LTD</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                    <td>SREE SARAN TRANSPORT</td>
                    <td> SREE SARAN TRANSPORT</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShipping")}>
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
                  </li>{" "}
                  <li class="page-item">
                    <a class="page-link" href="#">
                      6
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      7
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      8
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

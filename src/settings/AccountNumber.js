import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import EditToolTip from "../toolTip/EditToolTip";
import DeleteToolTip from "../toolTip/DeleteToolTip";
import "../settings/setting.css";

export default function AccountNumberSetting() {
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
              <span className="subTitle"> / Account Master</span>
            </div>
            <div>
              <button
                onClick={() => navigate("/settingAccount")}
                className="createBtnSet"
              >
                Create
              </button>
            </div>
          </div>

          <div className="highLight">
            <div className="row">
              <div className="col-3 inputFieldAcc">
                <label className="labelSet">Customer Number</label>
                <br />
                <input className="input" type="text" />
              </div>
              <div className="col-3 inputFieldAcc">
                <label className="labelSet">Account Number</label> <br />
                <input className="input" type="text" />
              </div>
              <div className="col-3 inputFieldAcc">
                <label className="labelSet">Gst No</label> <br />
                <input className="input" type="text" />
              </div>
            </div>
            <button className="searchBtnSet">Search</button>
            <button className="resetBtnSet">Reset</button>

            <div className="lastSection1">
              <div>
                Showing <strong>1-20</strong> of <strong>6,680</strong> items.
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
                    <th>Customer Number</th>
                    <th> Account Number</th>
                    <th> Gst Number</th>
                    <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>345300</td>
                    <td> 2559</td>
                    <td> -</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td>120008</td>
                    <td> 80006</td>
                    <td> -</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 9561400</td>
                    <td> 108562</td>
                    <td> -</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 120005</td>
                    <td> 80003</td>
                    <td> -</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 120004</td>
                    <td> 80002</td>
                    <td> -</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 120003</td>
                    <td> 80001</td>
                    <td> -</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 120007</td>
                    <td> 80005</td>
                    <td> -</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 120006</td>
                    <td> 80004</td>
                    <td> -</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 19006</td>
                    <td> 4004</td>
                    <td>33AQHPD9333Q2ZF</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 60002</td>
                    <td> 27001</td>
                    <td>24ADNPK4445K1ZA</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 80003</td>
                    <td> 48001</td>
                    <td>-</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 76002</td>
                    <td> 40002</td>
                    <td>33ADZFS3721L1ZH</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 17009</td>
                    <td>2898</td>
                    <td>33AAHCD1065A1ZC</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 79007</td>
                    <td>46001</td>
                    <td>29AREPR6462J1Z6</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 19004</td>
                    <td> 4003</td>
                    <td>33AALCR4320A1ZY</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 45001</td>
                    <td> 19001</td>
                    <td> 33ABCFR9071M1ZS</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 47001</td>
                    <td> 22001</td>
                    <td> 33ACXFS2244M1ZJ</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 77001</td>
                    <td> 43001</td>
                    <td> 33ACKFS1187L1ZQ</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 14001</td>
                    <td> 43001</td>
                    <td> 33AYPPH3572D1Z1</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                    <td> 76005</td>
                    <td> 41001</td>
                    <td> 33AADFD4206A1ZD</td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editAccountNumber")}>
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
                      9
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      10
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

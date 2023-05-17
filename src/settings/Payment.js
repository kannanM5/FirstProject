import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import EditToolTip from "../toolTip/EditToolTip";
import DeleteToolTip from "../toolTip/DeleteToolTip";
import "../settings/setting.css";

export default function PaymentSetting() {
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
              <span className="subTitle"> / Payment Master</span>
            </div>
            <div>
              <button
                onClick={() => navigate("/updatePayment")}
                className="createBtnSet"
              >
                Create
              </button>
            </div>
          </div>

          <div className="highLight">
            <div className="row">
              <div className="col-4 inputFieldAcc">
                <label className="labelSet">Payment Type</label>
                <br />
                <input className="input" type="text" />
              </div>
              <div className="col-4 inputFieldAcc">
                <label className="labelSet">Description</label> <br />
                <input className="input" type="text" />
              </div>
            </div>
            <button className="searchBtnSet">Search</button>
            <button className="resetBtnSet">Reset</button>

            <div className="lastSection1">
              <div>
                Showing <strong>1-20</strong> of <strong>45</strong> items.
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
                    <th>Payment Type</th>
                    <th> Description</th>
                    <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>20 DAYS CREDIT</td>
                    <td> 20 DAYS CREDIT</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td>DOC.THRO.BANK</td>
                    <td>DOCUMENTS THROUGH BANK</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td>60 DAYS PDC</td>
                    <td> 60 DAYS PDC</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td> 60 DAYS CREDIT</td>
                    <td>60 DAYS CREDIT</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td> DA 150 DAYS</td>
                    <td> DA 150 DAYS FROM B/L DATE</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td> LC AT 180 DAYS</td>
                    <td>
                      CONFIRMED & IRREVOCABLE LC AT 180 DAYS FROM THE DATE OF
                      B/L.
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td>LC AT 120 DAYS</td>
                    <td>
                      CONFIRMED & IRREVOCABLE LC AT 120 DAYS FROM THE DATE OF
                      DESPATCH
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td>30%ADV BAL PI</td>
                    <td> 30% ADVANCE AND BALANCE AGAINST PROFORMA INVOICE</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td>20%ADV BAL PI</td>
                    <td> 20% ADVANCE AND BALANCE AGAINST PROFORMA INVOICE</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td> DOC.AGA PAYMENT</td>
                    <td> DOCUMENTS AGAINST PAYMENT</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td> TRIAL & RETURN</td>
                    <td> MACHINE SENT FOR INSPECTION AND RETURN</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td> 90 DAYS ACCEPTA</td>
                    <td> DOCUMENTS AGAINST ACCEPTANCE 90 DAYS</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td>DA 30 DAYS</td>
                    <td>DA 30 DAYS FROM B/L DATE</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td> LC AT 90 DAYS</td>
                    <td>
                      4CONFIRMED & IRREVOCABLE LC AT 90 DAYS FROM THE DATE OF
                      B/L.
                    </td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td> 5 30 DAYS PDC</td>
                    <td> 5 30 DAYS PDC</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td> 45 DAYS PDC</td>
                    <td> 45 DAYS PDC</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td> 90 DAYS CREDIT</td>
                    <td> 90 DAYS CREDIT</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td> 10% ADV 90% LC</td>
                    <td> 10% ADVANCE & BALANCE 90% LC AT SIGHT</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td>DOC.AGA ACCEPT.</td>
                    <td> DOCUMENTS AGAINST ACCEPTANCE</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                    <td>FREE OF CHARGE</td>
                    <td> FREE OF CHARGE</td>

                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editPayment")}>
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
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

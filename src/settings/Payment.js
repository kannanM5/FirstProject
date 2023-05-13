import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import deleteIcon from "../images/icons8-delete-24.png";
import edit from "../images/icons8-edit-24.png";
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
              <span className="subTitle"> / Account Master</span>
            </div>
            <div>
              <button className="createBtnSet">Create</button>
            </div>
          </div>

          <div className="highLight">
            <div className="setting_search_boxes">
              <div className="inputFieldAcc">
                <label className="labelSet">Payment Type</label>
                <br />
                <input className="input" type="text" />
              </div>
              <div className="inputFieldAcc">
                <label className="labelSet">Description</label> <br />
                <input className="input" type="text" />
              </div>
              <div className="inputFieldAcc">
                <label className="labelSet">Gst No</label> <br />
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
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>DOC.THRO.BANK</td>
                    <td>DOCUMENTS THROUGH BANK</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>60 DAYS PDC</td>
                    <td> 60 DAYS PDC</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td> 60 DAYS CREDIT</td>
                    <td>60 DAYS CREDIT</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td> DA 150 DAYS</td>
                    <td> DA 150 DAYS FROM B/L DATE</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td> LC AT 180 DAYS</td>
                    <td>
                      {" "}
                      CONFIRMED & IRREVOCABLE LC AT 180 DAYS FROM THE DATE OF
                      B/L.
                    </td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>LC AT 120 DAYS</td>
                    <td>
                      {" "}
                      CONFIRMED & IRREVOCABLE LC AT 120 DAYS FROM THE DATE OF
                      DESPATCH
                    </td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>30%ADV BAL PI</td>
                    <td> 30% ADVANCE AND BALANCE AGAINST PROFORMA INVOICE</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>20%ADV BAL PI</td>
                    <td> 20% ADVANCE AND BALANCE AGAINST PROFORMA INVOICE</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td> DOC.AGA PAYMENT</td>
                    <td> DOCUMENTS AGAINST PAYMENT</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td> TRIAL & RETURN</td>
                    <td> MACHINE SENT FOR INSPECTION AND RETURN</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td> 90 DAYS ACCEPTA</td>
                    <td> DOCUMENTS AGAINST ACCEPTANCE 90 DAYS</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>DA 30 DAYS</td>
                    <td>DA 30 DAYS FROM B/L DATE</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
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
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td> 5 30 DAYS PDC</td>
                    <td> 5 30 DAYS PDC</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td> 45 DAYS PDC</td>
                    <td> 45 DAYS PDC</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td> 90 DAYS CREDIT</td>
                    <td> 90 DAYS CREDIT</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td> 10% ADV 90% LC</td>
                    <td> 10% ADVANCE & BALANCE 90% LC AT SIGHT</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>DOC.AGA ACCEPT.</td>
                    <td> DOCUMENTS AGAINST ACCEPTANCE</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>FREE OF CHARGE</td>
                    <td> FREE OF CHARGE</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="pagination3">
                <div>
                  <a href="#">&laquo;</a>
                </div>
                <div>
                  <a class="active" href="#">
                    1
                  </a>
                </div>
                <div>
                  <a href="#">2</a>
                </div>
                <div>
                  <a href="#">3</a>
                </div>

                <div>
                  <a href="#">&raquo;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

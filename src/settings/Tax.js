import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import deleteIcon from "../images/icons8-delete-24.png";
import edit from "../images/icons8-edit-24.png";
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
              <button className="createBtnSet">Create</button>
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
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>INTERSTATE 5 (IGST)NONREC</td>
                    <td>5.00</td>
                    <td> INTERSTATE 5 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td> INTERSTATE 5 (IGST)REC</td>
                    <td> 5.00</td>
                    <td>INTERSTATE 5 (IGST)REC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td> CUSTOM DUTY@5</td>
                    <td> 5.00</td>
                    <td> CUSTOM DUTY@5</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>CUSTOM DUTY@7.5</td>
                    <td> 7.50</td>
                    <td> CUSTOM DUTY@7.5</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td> INTERSTATE 3 (IGST)REC</td>
                    <td> 3.00</td>
                    <td> INTERSTATE 3 (IGST)REC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td> CUSTOM DUTY@0</td>
                    <td> 0.00</td>
                    <td> CUSTOM DUTY@0</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td> CUSTOM DUTY@20</td>
                    <td>20.00</td>
                    <td> CUSTOM DUTY@20</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td> INTERSTATE 12 (IGST)NONREC</td>
                    <td> 12.00</td>
                    <td>INTERSTATE 12 (IGST)NONREC</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="pagination2">
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
                  <a href="#">4</a>
                </div>
                <div>
                  <a href="#">5</a>
                </div>
                <div>
                  <a href="#">6</a>
                </div>
                <div>
                  <a href="#">7</a>
                </div>
                <div>
                  <a href="#">8</a>
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

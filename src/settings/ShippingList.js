import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import deleteIcon from "../images/icons8-delete-24.png";
import edit from "../images/icons8-edit-24.png";
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
              <button className="createBtnSet">Create</button>
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
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>SAVANI TRANSPORT</td>
                    <td> SAVANI TRANSPORT</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>SARAVANAA TRANSPORT</td>
                    <td> SARAVANAA TRANSPORT</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>S.M.P. TRAVELS</td>
                    <td>S.M.P. TRAVELS</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>SOUTH EASTERN</td>
                    <td>SOUTH EASTERN</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td> ROYAL INDIA ROADWAYS</td>
                    <td> ROYAL INDIA ROADWAYS</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td> Patel Roadways Ltd</td>
                    <td> Patel Roadways Ltd</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td> SRI BALAJI EXPRESS CARGO</td>
                    <td> SRI BALAJI EXPRESS CARGO</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td> PRAKASH COURIER</td>
                    <td> PRAKASH COURIER</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>SPEED EXPRESS</td>
                    <td> SPEED EXPRESS</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td> XPS CARGO</td>
                    <td> XPS CARGO</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td> ROAD TRANSPORT CO</td>
                    <td> ROAD TRANSPORT CO</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td> PROFESSIONAL COURIER</td>
                    <td>PROFESSIONAL COURIER</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>S.R.FREIGHT CARRIERS</td>
                    <td>S.R.FREIGHT CARRIERS</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td> ROYAL GOLDEN TRANSPORT</td>
                    <td> ROYAL GOLDEN TRANSPORT</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td> SOUTHERN ROADWAYS</td>
                    <td> SOUTHERN ROADWAYS</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td> SRI GANESH ROADLINES</td>
                    <td> SRI GANESH ROADLINES</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td> RANGA VILAS</td>
                    <td> RANGA VILAS</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td> SAFEXPRESS P LTD</td>
                    <td> SAFEXPRESS P LTD</td>

                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>SREE SARAN TRANSPORT</td>
                    <td> SREE SARAN TRANSPORT</td>

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

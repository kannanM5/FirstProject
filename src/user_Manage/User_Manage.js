import React from "react";
import "../user_Manage/User_Manage.css";
import search from "../images/icons8-search-50.png";
import plus from "../images/icons8-plus-48.png";
import EditToolTip from "../toolTip/EditToolTip";
import UpdateToolTip from "../toolTip/UpdateToolTip";
import DeleteToolTip from "../toolTip/DeleteToolTip";
import LocationToolTip from "../toolTip/LocationToolTip";
import TodoToolTip from "../toolTip/TodoToolTip";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch";

const UserManage = () => {
  const navigate = useNavigate();

  const dashboard = () => {
    navigate("/");
  };
  return (
    <>
      <div className="alignContent1">
        <div className="selectAllContent1">
          <div className="top_title">
            <div>
              <h3>Manage Sales Engineers</h3>
            </div>

            <div>
              <button className="btnIconSearch">
                <img className="iconSearch" src={search} alt="searchIcon" />
              </button>

              <button
                onClick={() => navigate("/updateSales")}
                className="plusBtn"
              >
                <img className="plus" src={plus} alt="AddIcon" />
                Create
              </button>
            </div>
          </div>
          <span onClick={dashboard} className="moveDashBoard">
            Dashboard
          </span>
          <span className="subTitle"> / Manage Sales Engineers</span>

          <div className="highLight">
            <div className="lastSection1">
              <div>
                showing <strong>1-12</strong> of <strong>12</strong> items.
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
                    <th>Name</th>
                    <th> Username</th>
                    <th> Email ID</th>
                    <th> Mobile</th>
                    <th>Branch</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sales Person 1</td>
                    <td>sales1</td>
                    <td> surya1030930@gmail.com</td>
                    <td> 8968646466</td>
                    <td> Branch 3</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editManage")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                        <div>
                          <LocationToolTip />
                        </div>
                        <div>
                          <TodoToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td> Sales Person 2</td>
                    <td> sales11</td>
                    <td>sales11@test.com</td>
                    <td> 5456786578</td>
                    <td> Branch 1</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                        <div>
                          <LocationToolTip />
                        </div>
                        <div>
                          <TodoToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td> Lcc User</td>
                    <td>lccuser1</td>
                    <td> lccocbe@lakshmicardclothing.com</td>
                    <td> 91422224025</td>
                    <td>Coimbatore</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                        <div>
                          <LocationToolTip />
                        </div>
                        <div>
                          <TodoToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td> Lcc User 2</td>
                    <td>lccuser2</td>
                    <td> lccuser2@gmail.com</td>
                    <td>65765765</td>
                    <td>Madurai</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                        <div>
                          <LocationToolTip />
                        </div>
                        <div>
                          <TodoToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>sales4</td>
                    <td> sales4</td>
                    <td>ccmobileapp@lakshmicardclothing.com</td>
                    <td> 9791491111</td>
                    <td> Branch 1</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                        <div>
                          <LocationToolTip />
                        </div>
                        <div>
                          <TodoToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td> test1sales</td>
                    <td> testsales1</td>
                    <td>cpvicky4646@gmail.com</td>
                    <td> 5675675673</td>
                    <td>Branch 1</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                        <div>
                          <LocationToolTip />
                        </div>
                        <div>
                          <TodoToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>dfhdfgfd</td>
                    <td> 12345</td>
                    <td> sales1@test.com</td>
                    <td>657567565</td>
                    <td>Branch 3</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                        <div>
                          <LocationToolTip />
                        </div>
                        <div>
                          <TodoToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td> fghgfh</td>
                    <td> ftyrtytr</td>
                    <td> cpvicky4646@gmail.com</td>
                    <td> 5654654644</td>
                    <td>bnhgfh</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                        <div>
                          <LocationToolTip />
                        </div>
                        <div>
                          <TodoToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td> sales6</td>
                    <td> sales6</td>
                    <td>surya1030930@gmail.com</td>
                    <td> 7778886668</td>
                    <td> branch6</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                        <div>
                          <LocationToolTip />
                        </div>
                        <div>
                          <TodoToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td> test sales 10</td>
                    <td> sales10</td>
                    <td> cpvicky4646@gmail.com</td>
                    <td> 56756756564</td>
                    <td>Branch 3</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                        <div>
                          <LocationToolTip />
                        </div>
                        <div>
                          <TodoToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td> Lcc User 3</td>
                    <td> lccuser3</td>
                    <td> lccuser3@gmail.com</td>
                    <td> 65765765</td>
                    <td> Madurai</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                        <div>
                          <LocationToolTip />
                        </div>
                        <div>
                          <TodoToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td> salestest</td>
                    <td> salestest</td>
                    <td>testsales@gmail.com</td>
                    <td> 9865748574</td>
                    <td>Coimbatore</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                        <div>
                          <LocationToolTip />
                        </div>
                        <div>
                          <TodoToolTip />
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
};

export default UserManage;

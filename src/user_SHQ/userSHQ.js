import React from "react";
import search from "../images/icons8-search-50.png";
import plus from "../images/icons8-plus-48.png";
import EditToolTip from "../toolTip/EditToolTip";
import UpdateToolTip from "../toolTip/UpdateToolTip";
import DeleteToolTip from "../toolTip/DeleteToolTip";
import { useNavigate } from "react-router-dom";
import "../user_SHQ/user_SHQ.css";
import ToggleSwitch from "../ToggleSwitch";

const UserSHQ = () => {
  const navigate = useNavigate();

  const dashboard = () => {
    navigate("/");
  };

  return (
    <>
      <div className="alignContent">
        <div className="selectAllContent">
          <div className="top_title">
            <div>
              <h3>Manage SHQ</h3>
            </div>

            <div>
              <button className="btnIconSearch">
                <img className="iconSearch" src={search} alt="searchIcon" />
              </button>

              <button
                onClick={() => navigate("/updateUserShq")}
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
          <span className="subTitle"> / Manage SHQ</span>

          <div className="highLight">
            <div className="lastSection1">
              <div>
                showing <strong>1-3</strong> of <strong>3</strong> items.
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
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td> SHQ Test 1</td>
                    <td> shqtest1</td>
                    <td> shqtest1@test.com</td>
                    <td> 9942573053</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShq")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>SHQ Test 2</td>
                    <td> shqtest2</td>
                    <td>shqtest2@test.com</td>
                    <td> 8667027917</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShq")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td> suriya</td>
                    <td> suriya123</td>
                    <td> sa@gmail.com</td>
                    <td> 9942573053</td>
                    <td>
                      <ToggleSwitch />
                    </td>
                    <td>
                      <div className="tooltipStyle">
                        <div onClick={() => navigate("/editShq")}>
                          <EditToolTip />
                        </div>
                        <div>
                          <DeleteToolTip />
                        </div>
                        <div>
                          <UpdateToolTip />
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

export default UserSHQ;

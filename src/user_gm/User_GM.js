import React from "react";
import search from "../images/icons8-search-50.png";
import plus from "../images/icons8-plus-48.png";
import "../user_gm/User_GM.css";
import { useNavigate } from "react-router-dom";
import edit from "../images/icons8-edit-24.png";
import deleteIcon from "../images/icons8-delete-24.png";
import lock from "../images/icons8-lock-24.png";

const User_GM = () => {
  const navigate = useNavigate();

  const dashBoard = () => {
    navigate("/");
  };

  return (
    <>
      <div className="alignContent">
        <div className="selectAllContent">
          <div className="top_title">
            <div>
              <h3>Manage GM</h3>
            </div>

            <div>
              <button className="btnIconSearch">
                <img className="iconSearch" src={search} alt="searchIcon" />
              </button>

              <button className="plusBtn">
                <img className="plus" src={plus} alt="AddIcon" />
                Create
              </button>
            </div>
          </div>
          <span onClick={dashBoard} className="moveDashBoard">
            Dashboard
          </span>
          <span className="subTitle"> / Manage GM</span>

          <div className="highLight">
            <div className="lastSection1">
              <div>
                showing <strong>1-2</strong> of <strong>2</strong> items.
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
                    <td> GM Test 3</td>
                    <td> gmtest3</td>
                    <td> test3@test.com</td>
                    <td> 9942573053</td>
                    <td>
                      <div className="toggleSwitch">
                        <div className="left">Active</div>
                        <div className="right"></div>
                      </div>
                    </td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                      <img className="crud" src={lock} alt="lock" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Radhakrishnan</td>
                    <td> yesrawkey</td>
                    <td> yesrawkey@gmail.com</td>
                    <td> 8667027917</td>
                    <td>
                      <div className="toggleSwitch">
                        <div className="left">Active</div>
                        <div className="right"></div>
                      </div>
                    </td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                      <img className="crud" src={lock} alt="lock" />
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

export default User_GM;

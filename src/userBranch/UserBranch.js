import React from "react";
import "../userBranch/UserBranch.css";
import search from "../images/icons8-search-50.png";
import plus from "../images/icons8-plus-48.png";
import deleteIcon from "../images/icons8-delete-24.png";
import edit from "../images/icons8-edit-24.png";
import lock from "../images/icons8-lock-24.png";
import { useNavigate } from "react-router-dom";

const UserBranch = () => {
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
              <h3>Manage Branches</h3>
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
          <span onClick={dashboard} className="moveDashBoard">
            Dashboard
          </span>
          <span className="subTitle"> / Manage Branches</span>

          <div className="highLight">
            <div className="lastSection1">
              <div>
                showing <strong>1-16</strong> of <strong>16</strong> items.
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
                    <td> Branch 1</td>
                    <td> branch1</td>
                    <td> suriyapanneerselvamv@gmail.com</td>
                    <td> 5675676565</td>
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
                    <td> Branch 3</td>
                    <td> branch3</td>
                    <td>surya1030930@gmail.com</td>
                    <td> 9942573043</td>
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
                    <td>3</td>
                    <td> Coimbatore</td>
                    <td> branch5</td>
                    <td> t@lakshmicardclothing.com</td>
                    <td> 914222240205</td>
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
                    <td>4</td>
                    <td> Coimbatore</td>
                    <td>Coimbatore</td>
                    <td> lccsocbe@lakshmicardclothing.com</td>
                    <td> 91-422-2240205 (4 lines)</td>
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
                    <td>5</td>
                    <td> Coimbatore</td>
                    <td> Coimbatore</td>
                    <td> lccsomdu@lakshmicardclothing.com</td>
                    <td> 91-452-2566756, 91-9843017077, 91-9842256675</td>
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
                    <td>6</td>
                    <td> Guntur</td>
                    <td>Guntur</td>
                    <td>lccsoguntur@lakshmicardclothing.com</td>
                    <td> 91-9553018666</td>
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
                    <td>7</td>
                    <td> Nagpur</td>
                    <td> Nagpur</td>
                    <td> lccsonagpur@lakshmicardclothing.com</td>
                    <td> 6665554443</td>
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
                    <td>8</td>
                    <td> Kolhapur</td>
                    <td> Kolhapur</td>
                    <td>umeshpatil@lakshmicardclothing.com</td>
                    <td> 4445553332</td>
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
                    <td>9</td>
                    <td> ytuiyt</td>
                    <td> hgjghgh</td>
                    <td>abcd@gmail.com</td>
                    <td> 9998887776</td>
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
                    <td>10</td>
                    <td> uytut</td>
                    <td> rtr</td>
                    <td> abcd1@gmail.com</td>
                    <td> 45654646</td>
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
                    <td>10</td>
                    <td> uytut</td>
                    <td> rtr</td>
                    <td> abcd1@gmail.com</td>
                    <td> 45654646</td>
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
                    <td>11</td>
                    <td> maestro test</td>
                    <td> testmae</td>
                    <td> testmaestro@gmail.com</td>
                    <td> 9897899876</td>
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
                    <td>12</td>
                    <td> test2</td>
                    <td> test2maestro</td>
                    <td>test22@gmail.com</td>
                    <td> 554434433</td>
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
                    <td>13</td>
                    <td> hfythtr</td>
                    <td> test3@gmail.com</td>
                    <td> test3@gmail.com</td>
                    <td> </td>
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
                    <td>14</td>
                    <td> bnhgfh</td>
                    <td>suriya</td>
                    <td> suriyapanneerselvamv@gmail.com</td>
                    <td> 4565465454</td>
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
                    <td>15</td>
                    <td> gfhgfh</td>
                    <td> gfhgfh</td>
                    <td> surya1030930@gmail.com</td>
                    <td></td>
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
                    <td>16</td>
                    <td> branch6</td>
                    <td> branch6</td>
                    <td> suriyapanneerselvamv@gmail.com</td>
                    <td> 6666555545</td>
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

export default UserBranch;

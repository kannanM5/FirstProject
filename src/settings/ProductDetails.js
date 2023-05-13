import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import deleteIcon from "../images/icons8-delete-24.png";
import edit from "../images/icons8-edit-24.png";
import "../settings/setting.css";

export default function ProductDetailsSetting() {
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
              <span className="subTitle"> / Product Master</span>
            </div>
            <div>
              <button className="createBtnSet">Create</button>
            </div>
          </div>

          <div className="highLight">
            <div className="setting_search_boxes">
              <div className="inputFieldPrice">
                <label className="labelSet">Item Number</label>
                <br />
                <input className="input" type="text" />
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet">Description</label> <br />
                <input className="input" type="text" />
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet">Uom Code</label> <br />
                <input className="input" type="text" />
              </div>
            </div>
            <div className="setting_search_boxes">
              <div className="inputFieldPrice">
                <label className="labelSet">Hsn Code</label>
                <br />
                <input className="input" type="text" />
              </div>
              <div className="inputFieldPrice">
                <select
                  class="form-select master"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">Domestic price list</option>
                  <option value="2">Service price list</option>
                  <option value="3">Domestic price list upto-28-2-22</option>
                </select>
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet">Base Price</label> <br />
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
              <table className="table table-bordered table-responsive table-striped table-condensed">
                <thead>
                  <tr className="table-primary">
                    <th>S.No</th>
                    <th>Item Number</th>
                    <th>Description</th>
                    <th> Uom Code</th>
                    <th> Hsn Code</th>
                    <th> Price List Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>AXTEST01</td>
                    <td> Test</td>
                    <td>Each</td>
                    <td>1500</td>
                    <td>Domestic Price List</td>
                    <td>100</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td> testing</td>
                    <td> gfhfgok</td>
                    <td>fghgfhgok</td>
                    <td>gfhgfok</td>
                    <td>Domestic Price List</td>
                    <td>999988</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>F010DCEA47</td>
                    <td> DOFFER WIRE M 4030 CE X 0.8 CENTURA</td>
                    <td>Each</td>
                    <td>ROL</td>
                    <td>84483100 </td>
                    <td>26700</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>M502390261</td>
                    <td>WIRE MASTER</td>
                    <td>NO</td>
                    <td>84799090</td>
                    <td>Domestic Price List</td>
                    <td>200000</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>H886430048</td>
                    <td>
                      {" "}
                      CARD SETTING LEAF GAUGE ( 300 MM x 45 MM Width) ( Consists
                      of ,4,5,6,7,8,10 and 12/1000 )
                    </td>
                    <td>NO</td>
                    <td>1500</td>
                    <td>Domestic Price List</td>
                    <td>1305</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>F502195011</td>
                    <td> TRAVERSE SHARPENING DEVICE – TSD 100</td>
                    <td>NO</td>
                    <td>84603900</td>
                    <td>Domestic Price List</td>
                    <td>550000</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>F502195010</td>
                    <td> TRAVERSE SHARPENING DEVICE – TSD 40</td>
                    <td>NO</td>
                    <td>84603900</td>
                    <td>Domestic Price List</td>
                    <td>450000</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td> F010KA0001</td>
                    <td> LAKSHMI ALFA COMB</td>
                    <td>NO</td>
                    <td>84483100</td>
                    <td>Domestic Price List</td>
                    <td>25000</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>A412805130</td>
                    <td> STUD M12 x 140 MM</td>
                    <td>NO</td>
                    <td>84799090</td>
                    <td>Domestic Price List</td>
                    <td>40</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>A412304231</td>
                    <td> SLIDE SCREW</td>
                    <td>NO</td>
                    <td>84799090</td>
                    <td>Domestic Price List</td>
                    <td>105</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>A412000551</td>
                    <td>Switch Board Front Plate (FGM 200055//1)</td>
                    <td>NO</td>
                    <td>8310</td>
                    <td>Domestic Price List</td>
                    <td>225</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>S960230007</td>
                    <td>DIGITAL MICROSCOPE MODEL NO. AM2111 DINO-LITE BASIC</td>
                    <td>NO</td>
                    <td>-</td>
                    <td>Domestic Price List</td>
                    <td>19870</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>S929201024</td>
                    <td> CHAIN R 1595 ( 3.050 Mtrs)</td>
                    <td>PKT</td>
                    <td>7315</td>
                    <td>Domestic Price List</td>
                    <td>3905</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>S905190208</td>
                    <td>
                      {" "}
                      "BCH" MAKE 4 PIN PLUG WITH INCLINED ANGLE TYPE 213 B
                    </td>
                    <td>NO</td>
                    <td> 8536</td>
                    <td>Domestic Price List</td>
                    <td> 1315</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>S905190206</td>
                    <td> '"BCH" MAKE 4 PIN PANEL MOUNT SOCKET TYPE - 2413 B</td>
                    <td>NO</td>
                    <td>8536</td>
                    <td>Domestic Price List</td>
                    <td>1315</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>S905150006</td>
                    <td>
                      {" "}
                      POTENTIO METER-10K-1 WATT/10 TURNS-MAKE:BOURNS ( 2 HP,
                      DRIVE )
                    </td>
                    <td>NO</td>
                    <td>8533</td>
                    <td>Domestic Price List</td>
                    <td>1190</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>S905100444</td>
                    <td>
                      {" "}
                      PUSH BUTTON LUMINOUS RED DIA 22 MM WITH 1 NC , 230 - 240
                      V, SCHNEIDER PART NO XB5AW34M5
                    </td>
                    <td>NO</td>
                    <td>8531</td>
                    <td>Domestic Price List</td>
                    <td>625</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>S905100443</td>
                    <td>
                      {" "}
                      PUSH BUTTON LUMINOUS GREEN DIA 22 MM WITH 1 N0 , 230 - 240
                      V, SCHNEIDER PART NO XB5AW33M5
                    </td>
                    <td>NO</td>
                    <td>8535</td>
                    <td>Domestic Price List</td>
                    <td>625</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>S905050164</td>
                    <td>
                      {" "}
                      Handle for "Siemens" Make 63A ON/OFF Switch Model 8UC68
                    </td>
                    <td>NO</td>
                    <td>-</td>
                    <td>Domestic Price List</td>
                    <td>1635</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>S929201024</td>
                    <td> OIL SEAL KIT FOR "HYDROSMITH" POWERPACK CYLINDER</td>
                    <td>NO</td>
                    <td>4016</td>
                    <td>Domestic Price List</td>
                    <td>3440</td>
                    <td>
                      <img className="crud" src={edit} alt="edit" />
                      <img className="crud" src={deleteIcon} alt="deleteIcon" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="pagination">
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
                  <a href="#">9</a>
                </div>
                <div>
                  <a href="#">10</a>
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

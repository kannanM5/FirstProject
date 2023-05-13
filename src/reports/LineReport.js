import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import "../settings/setting.css";
import "../reports/report.css";
import pdf from "../images/icons8-pdf-50.png";
import excel from "../images/icons8-microsoft-excel-48.png";
import DatePickerDate from "../DatePicker";

export default function LineReport() {
  const navigate = useNavigate();

  const dashBoard = () => {
    navigate("/");
  };
  return (
    <>
      <div className="alignContent1">
        <div className="selectAllContent1">
          <div className="top_title">
            <h3>Line Report</h3>
          </div>
          <span onClick={dashBoard} className="moveDashBoard">
            Dashboard
          </span>
          <span className="subTitle"> / Line Report</span>

          <div className="highLight">
            <div className="setting_search_boxes">
              <div className="inputFieldPrice">
                <label className="labelSet1">From date</label>
                <br />
                <DatePickerDate />
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet1">To date</label> <br />
                <DatePickerDate />
              </div>
            </div>
            <div className="setting_search_boxes">
              <div className="inputFieldPrice">
                <label className="labelSet1"> Created By</label>
                <select class="form-select" aria-label="Default select example">
                  <option value=""> -- Select created by --</option>
                  <option value="1">Super Admin</option>
                  <option value="23">GM Test 3</option>
                  <option value="24">SHQ Test 1</option>
                  <option value="26">Branch 1</option>
                  <option value="28">Branch 3</option>
                  <option value="29">Sales Person 1</option>
                  <option value="30">Sales Person 2 </option>
                  <option value="31">Lcc User</option>
                  <option value="32">Lcc User 2</option>
                  <option value="33">sales4</option>
                  <option value="34">maestro admin</option>
                  <option value="35">Coimbatore</option>
                  <option value="36">Coimbatore</option>
                  <option value="37">Madurai</option>
                  <option value="38">Guntur</option>
                  <option value="39">Nagpur</option>
                  <option value="40">Kolhapur</option>
                  <option value="41">ytuiyt</option>
                  <option value="42">uytut</option>
                  <option value="43">maestro test</option>
                  <option value="44">test2</option>
                  <option value="45">hfythtr</option>
                  <option value="46">test1sales</option>
                  <option value="47">bnhgfh</option>
                  <option value="48">gfhgfh</option>
                  <option value="49">dfhdfgfd</option>
                  <option value="50">fghgfh</option>
                  <option value="51">branch6</option>
                  <option value="52">sales6</option>
                  <option value="53">test sales 10</option>
                  <option value="54">Lcc User 3</option>
                  <option value="57">suriya</option>
                  <option value="59">Super Admin2</option>
                  <option value="60">Radhakrishnan</option>
                  <option value="62">salestest</option>
                </select>
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet1">Branch</label>
                <select class="form-select" aria-label="Default select example">
                  <option value=""> -- Select branch --</option>
                  <option value="1">Branch 1</option>
                  <option value="2">Branch 3</option>
                  <option value="3">Coimbatore</option>
                  <option value="4">Coimbatore</option>
                  <option value="5">Madurai</option>
                  <option value="6">Guntur</option>
                  <option value="7">Nagpur</option>
                  <option value="8">Kolhapur</option>
                  <option value="9">ytuiyt</option>
                  <option value="10">uytut</option>
                  <option value="11">maestro test</option>
                  <option value="12">test2</option>
                  <option value="13">hfythtr</option>
                  <option value="14">bnhgfh</option>
                  <option value="15">gfhgfh</option>
                  <option value="16">branch6</option>
                </select>
              </div>
            </div>
            <div className="setting_search_boxes">
              <div className="inputFieldPrice">
                <label className="labelSet1">Fusion Sync Date</label>
                <br />
                <DatePickerDate />
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet1">Fusion Sync Status</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select Fusion Status</option>
                  <option value="1">Pending</option>
                  <option value="2">Completed</option>
                </select>
              </div>
            </div>
            <div className="setting_search_boxes">
              <div className="inputFieldPrice">
                <label className="labelSet1"> Order Status</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Order Status</option>
                  <option value="2">Offer</option>
                  <option value="4">Order</option>
                </select>
              </div>
              <div className="inputFieldPrice">
                <label className="labelSet1">Customer</label>
                <div className="inputFieldPrice">
                  <input className="input" type="text" />
                </div>
              </div>
            </div>
            <div className="setting_search_boxes">
              <div className="inputFieldPrice">
                <label className="labelSet1">Offer/order No</label>
                <div className="inputFieldPrice">
                  <input className="input" type="text" />
                </div>
              </div>
              <div className="bottomSearch">
                <div className="alignBtn2">
                  <div>
                    <button className="alignSearch1">Search</button>
                  </div>
                  <div>
                    <button className="alignreset">Reset</button>
                  </div>
                </div>
                <div className="alignBtn2">
                  <div>
                    <button className="pdfBtn1">
                      <img className="pdf" src={pdf} alt="pdf" />
                      Pdf
                    </button>
                  </div>
                  <div>
                    <button className="excelBtn">
                      <img className="excel" src={excel} alt="excel" />
                      Excel
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lastSection1">
              <div></div>

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
                    <th>#</th>
                    <th>Customer</th>
                    <th>Bussiness Unit Id</th>
                    <th>Status</th>
                    <th>Order Type</th>
                    <th>Tax</th>

                    <th>Product Number</th>
                    <th>Product Name</th>
                    <th>Product Quantity</th>
                    <th>Product Price</th>
                    <th>Product Tax Price</th>
                    <th>Final Total</th>
                    <th>
                      <strong>Make Of Card</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="12"> No results found.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

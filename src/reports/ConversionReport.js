import React from "react";
import { useNavigate } from "react-router-dom";
import "../masters/masters.css";
import "../settings/setting.css";
import "../reports/report.css";
import pdf from "../images/icons8-pdf-50.png";
import excel from "../images/icons8-microsoft-excel-48.png";
import DatePickerDate from "../DatePicker";

export default function ConversionReport() {
  const navigate = useNavigate();

  const dashBoard = () => {
    navigate("/");
  };
  return (
    <>
      <div className="alignContent1">
        <div className="selectAllContent1">
          <div className="top_title">
            <h3>Conversion Report</h3>
          </div>
          <span onClick={dashBoard} className="moveDashBoard">
            Dashboard
          </span>
          <span className="subTitle"> / Conversion Report</span>

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
                <label className="labelSet1">Created By</label>
                <select class="form-select" aria-label="Default select example">
                  <option value=""> -- Select created by --</option>
                  <option value="1">Super Admin</option>
                  <option value="2">GM Test 3</option>
                  <option value="3">SHQ Test 1</option>
                  <option value="4">Branch 1</option>
                  <option value="5">Branch 3</option>
                  <option value="6">Sales Person 1</option>
                  <option value="7">Sales Person 2 </option>
                  <option value="8">Lcc User</option>
                  <option value="9">Lcc User 2</option>
                  <option value="9">sales4</option>
                  <option value="10">maestro admin</option>
                  <option value="11">Coimbatore</option>
                  <option value="12">Coimbatore</option>
                  <option value="13">Madurai</option>
                  <option value="14">Guntur</option>
                  <option value="15">Nagpur</option>
                  <option value="16">Kolhapur</option>
                  <option value="17">ytuiyt</option>
                  <option value="18">uytut</option>
                  <option value="19">maestro test</option>
                  <option value="20">test2</option>
                  <option value="21">hfythtr</option>
                  <option value="22">test1sales</option>
                  <option value="23">bnhgfh</option>
                  <option value="24">gfhgfh</option>
                  <option value="25">dfhdfgfd</option>
                  <option value="26">fghgfh</option>
                  <option value="27">branch6</option>
                  <option value="28">sales6</option>
                  <option value="29">test sales 10</option>
                  <option value="30">Lcc User 3</option>
                  <option value="32">suriya</option>
                  <option value="33">Super Admin2</option>
                  <option value="34">Radhakrishnan</option>
                  <option value="35">salestest</option>
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
                <input className="input" type="text" />
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
                <label className="labelSet1">Order Status</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="">Select Status</option>
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

            <div className="bottomSearch">
              <div className="dateSelect4">
                <label className="labelSet1" htmlFor="test">
                  Offer/order No
                </label>

                <div className="inputFieldPrice">
                  <input className="input" type="text" />
                </div>
              </div>

              <div className="alignBtn1">
                <div>
                  <button className="alignSearch">Search</button>
                </div>
                <div>
                  <button className="alignreset">Reset</button>
                </div>
              </div>
              <div className="alignBtn1">
                <div>
                  <button className="pdfBtn">
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
                    <th>Total Amount</th>
                    <th>Status</th>
                    <th>Offer/Order Number</th>
                    <th>Offer/Order Convert from</th>
                    <th>Offer/Order Created Date</th>
                    <th>Created By</th>
                    <th>Branch</th>
                    <th>Fusion Order No</th>
                    <th>Fusion Sync Status</th>
                    <th>Fusion Sync Date</th>
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

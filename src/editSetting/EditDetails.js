import React from "react";
import { useNavigate } from "react-router-dom";
import "../settings/setting.css";

export default function EditDetails() {
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
              <span onClick={dashBoard} className="moveDashBoard">
                Dashboard
              </span>
              <span className="subTitle"> / Product Master</span>
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
                <label className="labelSet">Price List Name</label>
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

            <button className="btn btn-success save">Save</button>
            <button
              onClick={() => navigate("/product setting")}
              className="btn btn-danger save"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

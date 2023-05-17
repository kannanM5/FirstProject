import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePickerDate from "../DatePicker";
import Select from "react-select";
import "../settings/setting.css";

export default function CreateOffer() {
  const [selectedOption1, setSelectedOption1] = useState("MDU OPERATING UNIT");
  const [selectedOption2, setSelectedOption2] = useState(
    "COMMERCIAL ITEMS SALES-UNIT 1"
  );
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");
  const [selectedOption7, setSelectedOption7] = useState("");
  const [selectedOption8, setSelectedOption8] = useState("");
  const [selectedOptionTax, setSelectedOptionTax] = useState("");
  const [selectedOptionPrice, setSelectedOptionPrice] = useState("");
  const [selectedOptionFreight, setSelectedOptionFreight] = useState("");
  const [selectedOptionDelivery, setSelectedOptionDelivery] = useState("");
  const [selectedOptionPayment, setSelectedOptionPayment] = useState("");
  const [selectedOptionWare, setSelectedOptionWare] = useState("");
  const [selectedOptionTransit, setSelectedOptionTransit] = useState("");
  const [selectedOptionSign, setSelectedOptionSign] = useState("");
  const [selectedOptionSales, setSelectedOptionSales] = useState("");
  const [selectedOptionOfficer, setSelectedOptionOfficer] = useState("");

  const options1 = [
    { value: 1, label: "CBE OPERATING UNIT" },
    { value: 2, label: "GNT OPERATING UNIT" },
    { value: 3, label: "MDU OPERATING UNIT" },
    { value: 4, label: " MFG OPERATING UNIT" },
  ];
  const options2 = [
    { value: 1, label: "COMMERCIAL ITEMS SALES-UNIT 1" },
    { value: 2, label: "COMMERCIAL ITEMS SALES-UNIT 3" },
    { value: 3, label: "COMMERCIAL ITEMS SALES-UNIT 4" },
    { value: 4, label: "DEPO REPAIR-CBE" },
    { value: 4, label: "    DEPO REPAIR-GNT" },
    { value: 4, label: "     DEPO REPAIR-MDU" },
    { value: 4, label: "  DEPO REPAIR-PNP" },
    { value: 12, laebl: "DOMESTIC SALES U1 UPTO280222" },
    { value: 12, laebl: "DOMESTIC SALES U3 UPTO280222" },
    { value: 14, laebl: "DOMESTIC SALES UNI-1" },
    { value: 14, laebl: "DOMESTIC SALES UNI-3" },
    { value: 14, laebl: "DOMESTIC SALES UNI-4" },
    { value: 14, laebl: "EXPORT SALES UNIT-4" },
    { value: 14, laebl: "DOMESTIC PRICE LIST-CHF-U1" },
    { value: 14, label: "DOMESTIC PRICE LIST-CHF-U3" },
    { value: 14, label: "DOMESTIC PRICE LIST-CHF-U4" },
    { value: 14, label: "DOMESTIC PRICE LIST-EURO-U1" },
    { value: 14, label: "DOMESTIC PRICE LIST-EURO-U3" },
    { value: 14, label: "DOMESTIC PRICE LIST-EURO-U4" },
    { value: 14, label: "EXPORT SALES-UNIT 4" },
    { value: 14, label: "EXPORT SALES-UNIT 1" },
    { value: 14, label: "FIELD SERVICE" },
    { value: 14, label: "LMW" },
    { value: 14, label: "NEPAL PRICE LIST-U1" },
    { value: 14, label: "NEPAL PRICE LIST-U3" },
    { value: 14, label: "EXPORT SALES-UNIT-4" },
    { value: 14, label: "SALES DEPOT-CBE" },
    { value: 14, label: "SALES DEPOT-GNT" },
    { value: 14, label: "SALES DEPOT-MDU" },
    { value: 14, label: "SALES DEPOT-PNP" },
  ];
  const option3 = [{ value: 1, label: "" }];
  const option4 = [{ value: 1, label: "" }];
  const option5 = [{ value: 1, label: "" }];
  const tax = [
    { value: 1, label: "CGST 0.05% REC" },
    { value: 1, label: "CGST_0 NON-REC" },
    { value: 1, label: "CGST_0REC" },
    { value: 1, label: "CGST_1.5NONREC" },
    { value: 1, label: "CGST_1.5REC" },
    { value: 1, label: "CGST_1.5 NONREC" },
  ];
  const price = [{ value: 1, label: "DOMESTIC PRICE LIST" }];
  const Freight = [
    { value: 1, label: "To Pay" },
    { value: 1, label: "Paid" },
  ];
  const delivery = [
    { value: 1, label: "1 WEEKS" },
    { value: 1, label: "10 - 12 WEEKS" },
    { value: 1, label: "10 - 16 WEEKS" },
    { value: 1, label: "2  -3 WEEKS" },
    { value: 1, label: "2 WEEKS" },
    { value: 1, label: "2 - 3 WEEKS" },
  ];
  const payment = [
    { value: 1, label: "30 Net" },
    { value: 1, label: "IMMEDIATE" },
    { value: 1, label: "ORA_HES" },
    { value: 1, label: "PAYMENT AGA L/C" },
    { value: 1, label: "20%ADV BAL SHIP" },
    { value: 1, label: "10 DAYS CREDIT" },
    { value: 1, label: "15 DAYS CREDIT" },
    { value: 1, label: "100% IN ADVANCE" },
    { value: 1, label: "LC AT SIGHT" },
    { value: 1, label: "LC AT 60 DAYS" },
  ];
  const Warehouse = [
    { value: 1, label: "Corporate Office" },
    { value: 1, label: "Unit 1" },
    { value: 1, label: "Unit 4" },
    { value: 1, label: "Unit 3" },
  ];
  const transit = [
    { value: 1, label: "TO BE COVERED BY THE CUSTOMER" },
    { value: 1, label: "TO BE COVERED BY US" },
  ];
  const sign = [
    { value: 1, label: "A.MARIMUTHU" },
    { value: 1, label: "D.RAMNIKANTH" },
    { value: 1, label: "K.BALASUBRAMANIAN" },
    { value: 1, label: "K.GANDHI RAJ" },
    { value: 1, label: "K. THANGAVELU" },
    { value: 1, label: "N.DEEPAK" },
    { value: 1, label: "qw" },
    { value: 1, label: "qwq" },
    { value: 1, label: "r.jaiya kishore" },
  ];
  const sales = [
    { value: 1, label: "bnhgfh" },
    { value: 1, label: "Branch 1" },
    { value: 1, label: "Branch 3" },
    { value: 1, label: "Branch 6" },
    { value: 1, label: "Coimbatore" },
    { value: 1, label: "Guntur" },
    { value: 1, label: "Madurai" },
    { value: 1, label: "test2" },
  ];
  const officer = [
    { value: 1, label: "Lcc User" },
    { value: 1, label: "Lcc User 2" },
    { value: 1, label: "Lcc User 3" },
    { value: 1, label: "Sales Person 1" },
    { value: 1, label: "Sales Person 1" },
    { value: 1, label: "sales4" },
    { value: 1, label: "sales6" },
  ];
  const navigate = useNavigate();
  const dashBoard = () => {
    navigate("/");
  };
  return (
    <>
      <div className="alignContent1">
        <div className="selectAllContent1">
          <div className="top_title">
            <div className="create">
              <h3>Create Sales Offer</h3>
            </div>
            <div>
              <button className="btn btn-primary save">Save</button>
              <button className=" btn btn-secondary save">Cancel</button>
              <button
                onClick={() => navigate("/others")}
                className="btn btn-danger save"
              >
                Back
              </button>
            </div>
          </div>
          <div className="total">
            <label>Grand Total</label>
            <input type="text" />
          </div>

          <div className="highLight">
            <div className="row separate">
              <div className="col-md-4">
                <label className="labelSet5">Order Date & Time</label>
                <br />
                <DatePickerDate />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Business Unit Id</label> <br />
                <Select
                  defaultValue={selectedOption1}
                  onChange={setSelectedOption1}
                  options={options1}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Order Type</label> <br />
                <Select
                  defaultValue={selectedOption2}
                  onChange={setSelectedOption2}
                  options={options2}
                />
              </div>
            </div>
            <div className="row separate">
              <div className="col-md-4">
                <label className="labelSet5">Customer</label>
                <Select
                  defaultValue={selectedOption3}
                  onChange={setSelectedOption3}
                  styles={{ height: "5x" }}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Contact Name</label>
                <Select
                  defaultValue={selectedOption4}
                  onChange={setSelectedOption4}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Contact Method</label>
                <Select
                  defaultValue={selectedOption5}
                  onChange={setSelectedOption5}
                />
              </div>
            </div>
            <div className="row separate">
              <div className="col-md-4">
                <label className="labelSet5">Bill to Customer</label>
                <Select
                  defaultValue={selectedOption6}
                  onChange={setSelectedOption6}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Bill to Account</label>
                <Select
                  defaultValue={selectedOption7}
                  onChange={setSelectedOption7}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Bill to Address</label>
                <Select
                  defaultValue={selectedOption8}
                  onChange={setSelectedOption8}
                />
              </div>
            </div>
            <div className="row separate">
              <div className="col-md-4">
                <label className="labelSet5">Bill Contact Method</label>
                <Select
                  defaultValue={selectedOption8}
                  onChange={setSelectedOption8}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Site use id</label>
                <Select
                  defaultValue={selectedOption8}
                  onChange={setSelectedOption8}
                />
              </div>
            </div>
            <div className="row separate">
              <div className="col-md-4">
                <label className="labelSet5">Ship to Customer</label>
                <Select
                  defaultValue={selectedOption8}
                  onChange={setSelectedOption8}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Ship to Address</label>
                <Select
                  defaultValue={selectedOption8}
                  onChange={setSelectedOption8}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Ship Contact Method</label>
                <Select
                  defaultValue={selectedOption8}
                  onChange={setSelectedOption8}
                />
              </div>
            </div>
            <div className="row separate">
              <div className="col-md-4">
                <label className="labelSet5">Tax Classification</label>
                <Select
                  defaultValue={selectedOptionTax}
                  onChange={setSelectedOptionTax}
                  options={tax}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Price List</label>
                <Select
                  defaultValue={selectedOptionPrice}
                  onChange={setSelectedOptionPrice}
                  options={price}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Freight</label>
                <Select
                  defaultValue={selectedOptionFreight}
                  onChange={setSelectedOptionFreight}
                  options={Freight}
                />
              </div>
            </div>
            <div className="row separate">
              <div className="col-md-4">
                <label className="labelSet5">Delivery</label>
                <Select
                  defaultValue={selectedOptionDelivery}
                  onChange={setSelectedOptionDelivery}
                  options={delivery}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Payment Terms</label>
                <Select
                  defaultValue={selectedOptionPayment}
                  onChange={setSelectedOptionPayment}
                  options={payment}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Warehouse</label>
                <Select
                  defaultValue={selectedOptionWare}
                  onChange={setSelectedOptionWare}
                  options={Warehouse}
                />
              </div>
            </div>
            <div className="row separate">
              <div className="col-md-4">
                <label className="labelSet5">Transit Insurance</label>
                <Select
                  defaultValue={selectedOptionTransit}
                  onChange={setSelectedOptionTransit}
                  options={transit}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Signing Authority</label>
                <Select
                  defaultValue={selectedOptionSign}
                  onChange={setSelectedOptionSign}
                  options={sign}
                />
              </div>
              <div className="col-md-4">
                <label className="labelSet5">Sales Office</label>
                <Select
                  defaultValue={selectedOptionSales}
                  onChange={setSelectedOptionSales}
                  options={sales}
                />
              </div>
            </div>
            <div className="row separate">
              <div className="col-md-4">
                <label className="labelSet5" htmlFor="test">
                  Sales Engineer
                </label>

                <Select
                  defaultValue={selectedOptionOfficer}
                  onChange={setSelectedOptionOfficer}
                  options={officer}
                />
              </div>
            </div>
            <div className="lastSection1">
              <div className="boxes">
                <span>Quotation Remarks</span>
                <div className="box"></div>
              </div>
              <div className="boxes">
                <span>Kind Attention</span>
                <div className="box"></div>
              </div>
              <div className="boxes">
                <span>Reference</span>
                <div className="box"></div>
              </div>
              <div className="boxes">
                <span>Kind Attention Reference Subject</span>
                <div className="box"></div>
              </div>
            </div>
          </div>

          <div className="highLight">
            <h5>Order Lines</h5>
            <div className="selectInputs">
              <div className="gap">
                <input
                  className="typeInput"
                  type="text"
                  placeholder="Product Number"
                />
              </div>
              <div className="gap">
                <input
                  className="typeInput backColor"
                  type="text"
                  placeholder="Product Number"
                />
              </div>
              <div className="gap">
                <input
                  className="typeInput backColor"
                  type="text"
                  placeholder="Product Name"
                />
              </div>
              <div className="gap">
                <input
                  className="typeInput"
                  type="text"
                  placeholder="Quantity"
                />
              </div>
              <div className="gap">
                <input
                  className="typeInput backColor"
                  type="text"
                  placeholder="0.00"
                />
              </div>
              <div className="gap">
                <input
                  className="typeInput backColor"
                  type="text"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="selectInputs">
              <div className="gap">
                <input
                  className="typeInput backColor"
                  type="text"
                  placeholder="0.00"
                />
              </div>
              <div className="gap">
                <input
                  className="typeInput backColor"
                  type="text"
                  placeholder="UOM"
                />
              </div>
              <div className="gap">
                <input
                  className="typeInput"
                  type="text"
                  placeholder="Description"
                />
              </div>
              <div className="gap">
                <input
                  className="typeInput"
                  type="text"
                  placeholder="Select make of card"
                />
              </div>
              <div className="gap">
                <input
                  className="typeInput"
                  type="text"
                  placeholder="hsncode"
                />
              </div>
              <div className="gap">
                <input
                  className="typeInput backColor"
                  type="text"
                  placeholder="0.00"
                />
              </div>
            </div>
            <button className="btn btn-success px-4 py-0 mb-5">Add</button>
            <hr /> <hr />
            <table className="table table-bordered table-responsive">
              <thead>
                <tr className="table-primary">
                  <th>#</th>
                  <th>Product Number</th>
                  <th>Name</th>
                  <th>UOM</th>
                  <th>Make of card</th>
                  <th>Hsn code</th>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Sub Total</th>
                  <th>Tax Total</th>
                  <th>
                    <strong>Grand Total </strong>
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

          <div className="highLight btnSubmit">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

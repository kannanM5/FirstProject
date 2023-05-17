import React, {useEffect, useState} from "react";
import "../mainContent/MainContent.css";
import pdf from "../images/icons8-pdf-50.png";
import excel from "../images/icons8-microsoft-excel-48.png";
import DatePickerDate from "../DatePicker";
// import { useLocation } from "react-router-dom";
// import { loginService } from "../Services/Services";
import { useNavigate } from "react-router-dom";
import { dashboardService } from "../Services/Axios";

const MainContent = () => {
  const navigate = useNavigate();
  // let { state } = useLocation();

  // useEffect(() => {
  //   const formData = new FormData()
  //   formData.append("authcode",)
  //   dashboardService().then((res)=>{
  //     console.log(res.data);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
 
  // }, [])
  


  return (
    <>
      <div className="content pt-3">
        <article className="selectAll">
          <div className="title">
            <h3>Dashboard</h3>
          </div>

          <div className="topInput">
            <div className="dateSelect">
              <div>
                <label htmlFor="fromDate">From date</label>
              </div>
              <DatePickerDate />
            </div>

            <div className="dateSelect">
              <div>
                <label htmlFor="fromDate">To date</label>
              </div>
              <DatePickerDate />
            </div>
            <div className="dateSelect">
              <button className="btnSearch ">Search</button>
            </div>
          </div>

          <div className="middlebtn">
            <div>
              <button
                onClick={() => navigate("/others")}
                className="middleBtn1"
              >
                <span className="number">0</span>
                Sales Offers
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate("/others")}
                className="middleBtn2"
              >
                <span className="number">0</span>
                Sales Orders
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate("/others")}
                className="middleBtn3"
              >
                <span className="number">0</span>
                Yet to sync orders
              </button>
            </div>

            <div>
              <button
                onClick={() => navigate("/others")}
                className="middleBtn4"
              >
                <span className="number">0</span>
                Sync orders
              </button>
            </div>
          </div>

          <div className="bottomTable">
            <div className="row bottom">
              <div className="col-6">
                <div>
                  <label className="label" htmlFor="fromDate">
                    From date
                  </label>
                </div>
                <DatePickerDate  />
              </div>

              <div className="col-6">
                <div>
                  <label className="label" htmlFor="fromDate">
                    To date
                  </label>
                </div>
                <DatePickerDate />
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div>
                  <label className="label" htmlFor="test">
                    Search Sales Engineer
                  </label>
                </div>
                <input className="input" type="text" />
              </div>
              <div className="col-5 alignBtn">
                <div>
                  <button  className="alignSearch">Search</button>
                </div>
                <div>
                  <button className="alignreset">Reset</button>
                </div>
              </div>
              <div className="col-3 alignBtn">
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

            <div className="lastSection">
              <div>
                showing <strong>1-10</strong> of <strong>12</strong> items.
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

            <div className="table">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr className="table-primary">
                    <th>S.No</th>
                    <th>Sales Engineer</th>
                    <th> Last Login Time</th>
                    <th>Number Of Offer(2023/05/01 To 2023/05/31)</th>
                    <th>Number Of Order(2023/05/01 To 2023/05/31)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td> Sales Person 2</td>
                    <td> 2023-01-28 11:41:37</td>
                    <td> 0</td>
                    <td> 0</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td> Sales Person 1</td>
                    <td> 2023-03-23 10:17:56</td>
                    <td> 0</td>
                    <td> 0</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td> Lcc User1</td>
                    <td>2023-02-01 15:16:26</td>
                    <td> 0</td>
                    <td> 0</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td> Lcc User 2</td>
                    <td>-</td>
                    <td> 0</td>
                    <td> 0</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td> sales4</td>
                    <td>2023-02-28 12:06:07</td>
                    <td> 0</td>
                    <td> 0</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td> test1sales</td>
                    <td>2022-09-10 11:53:26</td>
                    <td> 0</td>
                    <td> 0</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td> dfhdfgfd</td>
                    <td>-</td>
                    <td> 0</td>
                    <td> 0</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td> fghgfh</td>
                    <td>-</td>
                    <td> 0</td>
                    <td> 0</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td> sales6</td>
                    <td>-</td>
                    <td>2022-10-12 18:59:36</td>
                    <td> 0</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td> test sales 10</td>
                    <td>-</td>
                    <td>0</td>
                    <td> 0</td>
                  </tr>
                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>

                  <li class="page-item">
                    <a class="page-link" href="#">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default MainContent;

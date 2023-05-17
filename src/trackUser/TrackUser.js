import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../user_gm/User_GM.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function TrackUser() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const [startDate, setStartDate] = useState(null);
  const track = [
    { value: 1, label: "Sales Person 1" },
    { value: 1, label: "Sales Person 1" },
    { value: 1, label: "Lcc User" },
    { value: 1, label: "Lcc User 3" },
    { value: 1, label: "Lcc User 2" },
    { value: 1, label: "2ales4" },
    { value: 1, label: "2ales6" },
    { value: 1, label: "test sales 10" },
    { value: 1, label: "test2" },
    { value: 1, label: "salestest" },
  ];

  const branch = [
    { value: 1, label: "Branch 1" },
    { value: 1, label: "Branch 2" },
    { value: 1, label: "Coimbatore" },
    { value: 1, label: "Coimbatore" },
    { value: 1, label: "Madurai" },
    { value: 1, label: "Guntur" },
    { value: 1, label: "Nagpur" },
    { value: 1, label: "Kolhapur" },
    { value: 1, label: "Ytuiyt" },
    { value: 1, label: "uyturt" },
  ];
  const navigate = useNavigate();


  return (
    <>
      <div className="alignContent">
        <div className="selectAllContent">
          <div className="title">
            <h4 className="trackTitle">Location Track of all the users</h4>
          </div>
          <div className="row">
            <div className="col-md-2">
              <button onClick={() => navigate("/")} className="btn btn-danger">
                Back
              </button>
            </div>
            <div className="col-md-2">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={track}
              />
            </div>
            <div className="col-md-2 time">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="col-md-2">
              <Select
                defaultValue={selectedOption1}
                onChange={setSelectedOption1}
                options={branch}
              />
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>

          <div className="highLight">
            <div style={{ height: "65vh", width: "100%", padding: "15px" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

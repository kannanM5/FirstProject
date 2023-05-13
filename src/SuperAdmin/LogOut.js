import React from "react";
import mainLogo from "../images/logo2.png";
import "../SuperAdmin/superAdmin.css";
import eye from "../images/eye.png";

export default function LogOut() {
  return (
    <div className="MainBody">
      <div className="signUpBox">
        <img className="mainlogo" src={mainLogo} alt="MainLogo" />
        <h4 className="titleMain">Sign In</h4>

        <div className="inputFieldsign">
          <input className="input" type="text" placeholder="User name" />
        </div>
        <div className="inputFieldsign">
          <input className="input" type="text" placeholder="Password" />
          <img className="eyeMain" src={eye} alt="eye" />
        </div>
        <button className="signBtn">Sign In</button>
      </div>
      <br />
    </div>
  );
}

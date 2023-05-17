import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import lock from "../images/icons8-lock-24.png";

export default function UpdateToolTip() {
  return (
    <div>
      <a href="#" data-tooltip-id="reset password" data-tooltip-content="Reset Password">
        <img className="crud" src={lock} alt="lock" />
      </a>
      <Tooltip
        id="reset password"
        style={{ padding: "3px 10px", fontSize: "11px" }}
      />
    </div>
  );
}

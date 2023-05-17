import React from "react";
import { Tooltip } from "react-tooltip";
import location from "../images/icons8-location-50.png";
import "react-tooltip/dist/react-tooltip.css";

export default function LocationToolTip() {
  return (
    <div>
      <a data-tooltip-id="location" data-tooltip-content="Track User">
        <img className="crud" src={location} alt="location" />
      </a>
      <Tooltip
        id="location"
        style={{ padding: "3px 10px", fontSize: "11px" }}
      />
    </div>
  );
}

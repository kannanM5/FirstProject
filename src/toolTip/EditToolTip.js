import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import edit from "../images/icons8-edit-24.png";
export default function EditToolTip() {
  return (
    <div>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="Edit">
        <img className="crud" src={edit} alt="edit" />
      </a>
      <Tooltip
        id="my-tooltip"
        style={{ padding: "3px 10px", fontSize: "11px" }}
      />
    </div>
  );
}

import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import deleteIcon from "../images/icons8-delete-24.png";

export default function DeleteToolTip() {
  let deleteUser = () => {
    alert("Are you sure you want to delete this user?");
  };
  return (
    <div>
      <a data-tooltip-id="delete" data-tooltip-content="Delete">
        <img
          className="crud"
          onClick={deleteUser}
          src={deleteIcon}
          alt="deleteIcon"
        />
      </a>
      <Tooltip id="delete" style={{ padding: "3px 10px", fontSize: "11px" }} />
    </div>
  );
}

import React from "react";
import { Tooltip } from "react-tooltip";
import menu from "../images/icons8-menu-50.png";
import "react-tooltip/dist/react-tooltip.css";

export default function TodoToolTip() {
  return (
    <div>
      <a data-tooltip-id="toDo" data-tooltip-content="ToDo">
        <img className="crud" src={menu} alt="menu" />
      </a>
      <Tooltip id="toDo" style={{ padding: "3px 10px", fontSize: "11px" }} />
    </div>
  );
}

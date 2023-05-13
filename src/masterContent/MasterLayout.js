import React from "react";
import { Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function MasterLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

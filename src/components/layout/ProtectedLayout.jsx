import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./layout.scss";

const ProtectedLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layoutContainer">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedLayout;

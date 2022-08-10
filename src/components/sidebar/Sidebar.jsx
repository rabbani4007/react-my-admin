import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">lama logo</div>
      </div>
      <div className="center">list</div>
      <div className="bottom">color option</div>
    </div>
  );
};

export default Sidebar;

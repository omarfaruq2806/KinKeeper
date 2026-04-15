import React from "react";
import logo from "/logo.png";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar max-w-7xl mx-auto">
        <div className="flex-1">
          <img src={logo} alt="KinKeeper" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-3">
            <NavLink to="/" className={({ isActive }) => `px-4 py-2 ${isActive ? " bg-[#244D3F] text-white rounded-md" : "text-[#244D3F]"}`}>Home</NavLink>
            <NavLink to="/timeline" className={({ isActive }) => `px-4 py-2 ${isActive ? " bg-[#244D3F] text-white rounded-md" : "text-[#244D3F]"}`}>Timeline</NavLink>
            <NavLink to="/stats" className={({ isActive }) => `px-4 py-2 ${isActive ? " bg-[#244D3F] text-white rounded-md" : "text-[#244D3F]"}`}>Stats</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

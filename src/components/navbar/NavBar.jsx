import React from "react";
import logo from "/logo.png";
import { NavLink } from "react-router";
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5";
import { LuChartSpline } from "react-icons/lu";

const NavBar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar flex-col md:flex-row max-w-7xl mx-auto ">
        <div className="flex-1">
          <img src={logo} alt="KinKeeper" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-3 font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-2 py-1 md:px-4 md:py-2 flex items-center gap-2 ${isActive ? " bg-[#244D3F] text-white rounded-md" : "text-[#244D3F]"}`
              }
            >
              <IoHomeOutline />
              Home
            </NavLink>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `px-2 py-1 md:px-4 md:py-2 flex items-center gap-2 ${isActive ? " bg-[#244D3F] text-white rounded-md" : "text-[#244D3F]"}`
              }
            >
              <IoTimeOutline />
              Timeline
            </NavLink>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `px-2 py-1 md:px-4 md:py-2 flex items-center gap-2 ${isActive ? " bg-[#244D3F] text-white rounded-md" : "text-[#244D3F]"}`
              }
            >
              <LuChartSpline />
              Stats
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

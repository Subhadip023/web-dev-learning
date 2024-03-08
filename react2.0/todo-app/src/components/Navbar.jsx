import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-indigo-900 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-8">iTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all">
          <NavLink to="/" className="text-500" activeClassName="font-bold">
            Home
          </NavLink>
        </li>
        <li className="cursor-pointer hover:font-bold transition-all">
          <NavLink to="/about" className="text-500" activeClassName="font-bold">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

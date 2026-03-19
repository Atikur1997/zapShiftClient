import React from "react";
import Logo from "../../components/Logo/Logo";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="text-lg">
          Services
        </NavLink>
      </li>

      <li>
        <NavLink to="/coverage" className="text-lg">
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="text-lg">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/pricing" className="text-lg">
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="text-lg">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="text-lg">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-2xl rounded-lg">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/login" className="btn text-lg">
          Login
        </NavLink>
        <a className="btn bg-primary ml-3 text-lg">Be a Rider</a>
      </div>
    </div>
  );
};

export default Navbar;

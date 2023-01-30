import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CgGym } from "react-icons/cg";

import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="app__navbar">
      <Link to="/" className="navbar-mainheader link pointer font_head">
        The Gym
        <CgGym />
      </Link>
      {/* for laptop view */}
      <div className="navbar-btns font_head">
        <Link to="/aboutgym" className="navbar-btn pointer">
          About Us
        </Link>
        <Link to="/trainers" className="navbar-btn pointer">
          Personal Trainers
        </Link>
        <Link to="/priceplans" className="navbar-btn pointer">
          Prices & Plans
        </Link>
        <Link to="/schedule" className="navbar-btn pointer">
          Schedule
        </Link>
        <Link to="/signup" className="navbar-btn pointer link">
          Sign-Up
        </Link>

        {/* for mobile view */}
        <div className="navbar_mobile-menubtn pointer">
          {open ? (
            <div className="navbar_mobile-overlay ">
              <RxCross2
                className="cross pointer"
                onClick={() => {
                  setOpen(false);
                }}
              />
              <ul className="app__navbar-overlay-links">
                <li>
                  <Link
                    onClick={() => {
                      setOpen(false);
                    }}
                    to="/aboutgym"
                    className="navbar_mobile-links pointer link"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setOpen(false);
                    }}
                    to="/trainers"
                    className="navbar_mobile-links pointer link"
                  >
                    Personal Trainers
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setOpen(false);
                    }}
                    to="/priceplans"
                    className="navbar_mobile-links pointer link"
                  >
                    Prices & Plans
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setOpen(false);
                    }}
                    to="/schedule"
                    className="navbar_mobile-links pointer link"
                  >
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setOpen(false);
                    }}
                    to="/signup"
                    className="navbar_mobile-links pointer link"
                  >
                    Sign-Up
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <GiHamburgerMenu
              onClick={() => {
                setOpen(true);
              }}
              className="hamburger pointer"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft">
          <span className="logo">Stephanie</span>
        </div>
        <div className="topRight">
          <div className="navbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
            alt="personal pics"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

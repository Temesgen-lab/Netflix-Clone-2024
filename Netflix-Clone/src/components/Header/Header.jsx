import React from "react";
import "./header.css";
import netLogo from "../../assets/images/netflix-logo.png";
import SearchIcon from "@mui/icons-material/SearchOutlined";

import NotificationsIcon from "@mui/icons-material/NotificationsNoneOutlined";

import AccountBoxIcon from "@mui/icons-material/AccountBoxOutlined";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDownOutlined";

const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li>
              <img src={netLogo} alt="netflix-logo"  />
            </li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

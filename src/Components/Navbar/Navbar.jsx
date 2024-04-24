import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu_icon.png";
import logo_icon from "../../assets/logo_icon.png";
import search_icon from "../../assets/search_icon.png";
import upload_icon from "../../assets/upload_icon.png";
import notification_icon from "../../assets/notification_icon.png";
import profile_icon from "../../assets/profile_icon.png";
import voice_icon from '../../assets/voice_icon.png'
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar(prev => prev === false ? true : false)}
          src={menu_icon}
          alt="menu-icon"
        />
        <Link to='/'>
        <img className="logo-icon" src={logo_icon} alt="youtube_logo" />
        </Link>
        <span>YouTube Clone</span>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="serch-icon" />
        </div>
        <div className="voice">
        <img src={voice_icon} alt="" />
      </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} alt="" className="user-icon" />
      </div>
    </nav>
  );
};


export default Navbar;

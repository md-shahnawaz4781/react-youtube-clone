import React from "react";
import "./Sidebar.css";
import home_icon from "../../assets/home_icon.png";
import game_icon from "../../assets/game_icon.png";
import automobile_icon from "../../assets/automobile_icon.png";
import sports_icon from "../../assets/sports_icon.png";
import entertainment_icon from "../../assets/entertainment_icon.png";
import tech_icon from "../../assets/tech_icon.png";
import music_icon from "../../assets/music_icon.png";
import blogs_icon from "../../assets/blogs_icon.png";
import news_icon from "../../assets/news_icon.png";


const Sidebar = ({ sidebar , category, setCategory}) => {
  return (
    <>
      <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
        
        <div className="sportcut-links">
          <div className={`side-link ${category===0? 'active': ''}`} onClick={()=>setCategory(0)}>
            <img src={home_icon} alt="" />
            <p>Home</p>
          </div>
            <div className="gap"></div>
          <div className={`side-link ${category===20? 'active': ''}`} onClick={()=>setCategory(20)}>
            <img src={game_icon} alt="" />
            <p>Game</p>
          </div>
          <div className="gap"></div>
          <div className={`side-link ${category===2? 'active': ''}`} onClick={()=>setCategory(2)}>
            <img src={automobile_icon} alt="" />
            <p>Automobiles</p>
          </div>
          <div className="gap"></div>
          <div className={`side-link ${category===17? 'active': ''}`} onClick={()=>setCategory(17)}>
            <img src={sports_icon} alt="" />
            <p>Sports</p>
          </div>
          <div className="gap"></div>
          <div className={`side-link ${category===24? 'active': ''}`} onClick={()=>setCategory(24)}>
            <img src={entertainment_icon} alt="" />
            <p>Entertainment</p>
          </div>
          <div className="gap"></div>
          <div className={`side-link ${category===28? 'active': ''}`} onClick={()=>setCategory(28)}>
            <img src={tech_icon} alt="" />
            <p>Tech</p>
          </div>
          <div className="gap"></div>
          <div className={`side-link ${category===10? 'active': ''}`} onClick={()=>setCategory(10)}>
            <img src={music_icon} alt="" />
            <p>Music</p>
          </div>
          <div className="gap"></div>
          <div className={`side-link ${category===22? 'active': ''}`} onClick={()=>setCategory(22)}>
            <img src={blogs_icon} alt="" />
            <p>Blogs</p>
          </div>
          <div className="gap"></div>
          <div className={`side-link ${category===25? 'active': ''}`} onClick={()=>setCategory(25)}>
            <img src={news_icon} alt="" />
            <p>News</p>
          </div>
          <div className="gap"></div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React from "react";
import classes from "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import MusicVideoIcon from '@material-ui/icons/MusicVideo';


function Header() {
  return (
    <div className="header">
      <div className="header_icons">
        <div className="header_icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header_icon">
          <MusicVideoIcon />
          <p>Music</p>
        </div>
        <div className="header_icon">
          <VideoLibraryIcon />
          <p>Videos</p>
        </div>
        <div className="header_icon">
          <LiveTvIcon />
          <p>Live TV</p>
        </div>
        <div className="header_icon">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Search Here..." ></input>
             </div>
        </div>
        <div className="header_icon">
        <button type="submit" className="searchButton">
                <SearchIcon />
                </button>
        </div>        
      </div>
      <h1>mFlix</h1>
    </div>
  );
}

export default Header;

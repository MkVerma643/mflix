import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Videos.css"
import logo from "./logo.svg";

function Video(props) {
  let i="Click to Play";
  
  return (
    <div className="videos">
    <div className="video">
    <Link to={'videoplay/'+props.videodata}>
    <img src={logo} width='270px'  alt="Image Thumbnail"></img>
    <h3>{i}</h3>
    </Link>
    </div>
    </div>
  );
}

export default Video;



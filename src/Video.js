import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Video(props) {
  return (
    <div class="card" style={{width:"20.4rem"}}>
    <Link to={'videoplay/'+props.videodata}><img src="logo192.png" style={{height : "200px"}} class="card-img-top" alt="..."/>
    </Link>
    </div>

  );
}

export default Video;



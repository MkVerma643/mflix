import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./Videos.css";

function VideoDetails(props) {
  let [videodetails, setvideodetails] = useState({});
  let params = useParams();

  return (
    <div className="container">
      <video controls autoPlay crossOrigin="anonymous">
        <source
          src={`http://localhost:5000/api/playvideo?filename=${params.videoid}`}
          type="video/mp4"
        ></source>
        <track
          label="English"
          kind="captions"
          srcLang="en"
          src={videodetails}
          default
        ></track>
      </video>
    </div>
  );
}

export default VideoDetails;

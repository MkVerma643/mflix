import Video from "./Video";
import axios from "axios"
import { useState ,useEffect } from "react";
import { error } from "jquery";

function Home(){
    let [videos, setVideo] = useState([])
    var baseurl = "http://localhost:5000"
    useEffect(()=>{
        axios({
            method : "get",
            url : baseurl+'/api/allassets',
        }).then((response)=>{
            console.log("response from all assets video",response.data.videos)
            setVideo(response.data.videos)
        },(error)=>{
            console.log("error from all cakes api",error)
        })
    }, [])
    return (
           
            <div className="row">
            {videos?.length>0 && videos.map((each,index)=>{
                return (<Video videodata={each} index={index} />)
            })}
            </div>
    )
}

export default Home

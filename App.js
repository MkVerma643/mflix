import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import videoDetails from "./videoDetails"

import Navbar from "./Navbar"
import { connect } from "react-redux"
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
  
} from "react-router-dom";

import axios from "axios"

function App(props) {
  if(localStorage.token && !props.user){
    var token = localStorage.token
    axios({
      method:'get',
      url : 'https://apibyashu.herokuapp.com/api/getuserdetails',
      headers :{
        authToken : token
      }
    }).then((response)=>{
      console.log("response from api",response)
      props.dispatch({
        type : "INTIALIZE",
        payload : response.data.data
      })
    },(error)=>{
      console.log("error",error)
    })
  }
  var [login,setLogin]=useState(false);
  return (
    <div>
      <Router>
      <Navbar loginStatus={login} Logout={setLogin}/>
        <div>
      <Switch>
      <Route path ="/" exact component={Home} ></Route>
      <Route path ="/videoplay/:videoid" exact component={videoDetails} ></Route>

      <Route path ="/*" >
        <Redirect to="/"></Redirect>
      </Route>
      </Switch>
        
      
        </div>
      </Router>
    </div>
  );
}

export default connect (function(state,props){
return {
  user:state?.user
}
})(App);

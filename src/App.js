import "./App.css";
import React from 'react'
import Home from "./Home"
import videoDetails from "./videoDetails"
import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import { connect } from "react-redux"
import Header from "./Header";

function App(props) {
  return (
    <div className="App">
      <Header></Header>


      <br></br>
      <Router>
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
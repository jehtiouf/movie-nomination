import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import MovieCart from "./components/MovieCart/MovieCart";

function App() {
  if(!JSON.parse(localStorage.getItem("nominations")))
  {
    var dummy = [];    
    localStorage.setItem("nominations", JSON.stringify(dummy));
  }
  return (
    <Router >
      <Switch>
      <Route exact path='/' render={(props) => (<Home/>)}/>
      <Route exact path='/moviecart' render={(props) => (<MovieCart/>)}/>  
      </Switch>
    </Router>
  );
}

export default App;

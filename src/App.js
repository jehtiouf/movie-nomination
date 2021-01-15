import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import MovieCart from "./components/MovieCart/MovieCart";

function App() {
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

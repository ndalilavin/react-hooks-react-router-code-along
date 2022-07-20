import React from 'react';
import {Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./NavBar";

function App() {
  return (
    <div>
    <NavBar />
    <Route  exact path="/about">
    <About />
    </Route>
    <Route exact path="/login">
    <Login/>
    </Route>
    <Route exact path="/">
    <Home />
    </Route> 
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Profile from "./components/screens/Profile";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signin" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/profile" exact component={Profile} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;

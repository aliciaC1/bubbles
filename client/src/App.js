import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import API from "./utils/API"; 
// import logo from './logo.svg';
import './App.css';

const App = () => (
<Router>
<div>
  <Nav />
  <Switch>
      <Route exact path = "/" component = {Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route component={NoMatch} />
  </Switch>
</div>
</Router>
);

export default App;

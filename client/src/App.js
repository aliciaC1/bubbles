import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from "./pages/Home/home.js";
import Login from "./pages/Login/login.js";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";

// import Posts from './components/posts/Posts';
import './App.css';

const App = () => (
<Router>
  <div>
    <Provider store = { store }>
      <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/register" component={Register} />
          <Route exact path ="/dashboard" component={Dashboard} />
          <Route component={NoMatch} />
      </Switch>
    </Provider>
  </div>
</Router>
);

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import NewPost from './pages/NewPost.js';
import Registration from './pages/Registration.js';
import BubblePage from './pages/BubblePage.js';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path ='/' component={Registration} />
        <Route exact path ='/post' component={NewPost} />
        <Route exact path ='/login' component={LoginPage} />
        <Route exact path ='/bubbles' component={BubblePage} />
        <Route component={Registration} />
      </Switch>
    </div>
  </Router>
);

export default App;

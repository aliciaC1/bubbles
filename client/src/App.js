import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SubmitPost from './pages/submitPost.js';
import Default from './pages/default.js';
import BubblePage from './pages/BubblePage.js';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path ='/' component={BubblePage} />
        <Route exact path ='/post' component={SubmitPost} />
        <Route component={Default} />
      </Switch>
    </div>
  </Router>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home.js";
import Login from "./pages/Login/login.js";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import './App.css';

class App extends React.Component {
  state = {
    bubbles: [],
    username: '',
    posts: [],
    avatar: '',
  }

  updateBubbles = (bubbles) => {
    this.setState({
      bubbles
    })
  }

  updatePosts = (posts) => {

    this.setState({
      posts
    })
  }

  updateUserName = (username) => {
    this.setState({
      username
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" render={props =>
              <Dashboard {...props}
                updateBubbles={this.updateBubbles}
                bubbles={this.state.bubbles}
                username={this.state.username}
                updateUserName={this.updateUserName}
              />}>
            </Route>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

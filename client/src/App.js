import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home.js";
import Login from "./pages/Login/login.js";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import './App.css';
import axios from "axios"

class App extends React.Component {
  state = {
    bubbles: [],
    username: '',
    activeuser: '',
    posts: [],
    avatar: ''
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

  updatePost = (posts) => {

    this.setState({
      posts
    })
  }

  updateactiveuser = (id) => {

    this.setState({
      activeuser: id
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
                posts={this.posts}
                activeuser={this.activeuser}
                updateactiveuser={this.updateactiveuser}
                updateUserName={this.updateUserName}
                updatePost={this.updatePost}
                updateBubbles={this.updateBubbles}


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

import React, { Component } from 'react';
import './postBoard.css';
import API from '../utils/https';
import Post from '../components/post.js';

class PostBoard extends Component {
  state = {
    posts: [{
      title: "Temp Title",
      body: "Temp Body"
    }]
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getAllPosts()
      .then(response =>  {
        console.log(response);
        this.setState({ posts: response })
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Post postData={this.state.posts[0]}/>
    )
  }
}

export default PostBoard;

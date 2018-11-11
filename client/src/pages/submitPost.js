import React, { Component } from 'react';
import './submitPost.css';
import API from '../utils/https';

class Post extends Component {
  state = {
    postTitle: "",
    postBody: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitPost = event => {
    event.preventDefault();

    API.create(this.props.bubbleID, this.state.postTitle, this.props.userID, this.state.postBody)
      .then(response => {
        this.setState({
          postTitle: "",
          postBody: ""
        })
      }).catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <form>
          <h3>Title:</h3>
          <input id="title" name="postTitle" value={this.state.postTitle} onChange={this.handleInputChange}></input>
          <h3>Message:</h3>
          <textarea id="body" name="postBody" value={this.state.postBody} onChange={this.handleInputChange}></textarea>
          <br></br>
          <button onClick={this.submitPost}>Post</button>
        </form>
      </div>
    )
  }
}

export default Post;

import React, { Component } from 'react';
import './BubblePage.css';
import API from '../utils/https';

class BubblePage extends Component {
  state = {
      posts: ""
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
      <h1>Hello World</h1>
    )
  }
}

export default BubblePage;

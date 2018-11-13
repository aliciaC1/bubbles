import React, { Component } from 'react';
import './post.css'
const Post = props => (
  <div>
    <div>{props.postData.title}</div>
    <div>{props.postData.body}</div>
  </div>
);

export default Post;

import React, { Component } from 'react'
import { Form, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';
import FileUpload from '../FileUpload';

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '', 
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onChange = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({errors: newProps.errors});
    }
  }
  onSubmit(e) {
    e.preventDefault();
    
    const { user } = this.props.auth; 
    
    const newPost = {
        text: this.state.text, 
        name: user.name, 
        avatar: user.avatar
    }; 

    this.props.addPost(newPost);
    this.setState({text: ''});
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const {errors} = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.TextArea 
          placeholder='Post' 
          name='text' 
          value={this.state.text} 
          onChange={this.onChange} 
          errors={errors.text}/>
          <Form.Button content='Post' />
          <FileUpload/>
        </Form.Group>
      </Form>
    )
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired, 
  auth: PropTypes.func.isRequired, 
  errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, {addPost})(PostForm);


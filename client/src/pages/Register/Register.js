import React from 'react'
import Link from 'valuelink'
// import {Input} from 'valuelink/tags.jsx'
// import { Redirect } from "react-router-dom";
import API from '../../utils/API';
import querystring from 'querystring';
import hash from 'js-sha256';
import { Button, Form, Grid, Header, Image, Segment, Modal, Icon } from 'semantic-ui-react';
// import { set } from 'mongoose';
import logo from '../../assets/BBLOGO.png';

class Signup extends React.Component {


  state = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    modalOpen: false,
    passwordMatch: false,
    passwordError: false,
    emailError: false,
    usernameError: false
  }


  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  // Keep track of what user types into username input so that input can be grabbed later
  handleUserChange = (event) => {

    this.setState({ username: event.target.value });
    console.log(this.state.username)

  }

  // Keep track of what user types into password input so that input can be grabbed later
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
    console.log(this.state.password)
  }

  // Keep track of what user types into email input so that input can be grabbed later
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
    console.log(this.state.email)
  }

  handlePasswordConfirm = (event) => {
    this.setState({ confirm: event.target.value });
    console.log(this.state.confirm)

  }


  errorhandler = (event) => {

    event.preventDefault();
    let error = false;

    if (this.email === '') {
      this.setState({ emailError: true })
      error = true
    } else {
      this.setState({ emailError: false })

    }

    if (this.password < 6) {
      this.setState({ passwordError: true })
      error = true
    } else {
      this.setState({ passwordError: false })

    }

    if (this.password !== this.confirm) {
      this.setState({ passwordMatch: true })
      error = true
    } else {
      this.setState({ passwordMatch: false })

    }

    if (error === true) {


    }
  }




  handleSignup = async (event) => {

    event.preventDefault();

    if (!this.state.email.includes("@")) {
      alert("Please Enter a Valid E-mail Address!");
      this.setState({ email: "" });
    } else if (this.state.password !== this.state.confirm) {
      alert("Passwords don't Match!");
      this.setState({ password: "", confirm: "" });
    } else if (this.state.password === "" || this.state.username === "" || this.state.email === "") {
      this.handleOpen();
    } else {
      const data = querystring.stringify({
        "username": this.state.username,
        "password": hash.sha256(this.state.password),
        "email": this.state.email
      });

      const res = await API.register(data);
      if (res.data === 404) {
        alert("Username already exists or Email is already in use!");
        this.setState({ username: "", email: "", password: "", confirm: "" })
      } else {
        setTimeout(function () { window.location = res.headers.location; }, 1000);
      }
    }
  }

  render() {

    const nameLink = Link.state(this, 'username').check(x => x, "Name is Required").check(x => x.indexOf("") < 0, "Name shouldn’t contain spaces");

    return (


      <div className='login-form'>
        <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                  height: 100%;
                }
              `}</style>

    
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size='small'
          textAlign='center'
          style ={{paddingTop:'325px'}}
          >
            <Modal.Content>
              <Header inverted as='h3' icon = 'exclamation' content = 'Hey There! All fields must be filled!'/>
            </Modal.Content>
            <Modal.Actions>
              <Button inverted color='yellow' onClick={this.handleClose}>
                <Icon name='checkmark' /> Got it
              </Button>
            </Modal.Actions>
          </Modal>

        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h3' color='black' textAlign='center'>
              <Image className ='mainLogo' src={logo} style={{width:'293px'}} /> 
              <br/><br/> --  Create a Bubbles Account --
            </Header>
            <Form size='large' onSubmit={this.handleSignup}>
              <Segment basic>

                <Form.Input fluid  icon= 'smile outline' iconPosition='left' placeholder='username' value={this.state.username} onChange={this.handleUserChange} valueLink={nameLink} />

                <Form.Input fluid icon='at' iconPosition='left' placeholder='e-mail address' value={this.state.email} onChange={this.handleEmail} />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='password'
                  type='password'
                  onChange={this.handlePassword}
                  value={this.state.password}
                  error={this.passwordError || this.passwordMatch}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='confirm password'
                  value={this.state.confirm}
                  onChange={this.handlePasswordConfirm}
                  type='password'
                />
                <Button animated='vertical' basic color='black' fluid size='large' type="submit">
                  <Button.Content visible>Signup</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>
              </Segment>
            </Form>
            already have a Bubbles account? <a href='/login' style = {{color:'#a08000'}}>Login</a>
            <br/>
            <a href='/' style = {{color: '#8bb2ff'}}><Icon name ='angle double left'/> Return to Home Page</a>
          </Grid.Column>
        </Grid>
      </div>



    );
  }

}

export default Signup;

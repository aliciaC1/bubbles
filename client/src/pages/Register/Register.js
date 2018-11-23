import React from 'react'
import Link from 'valuelink'
// import {Input} from 'valuelink/tags.jsx'
// import { Redirect } from "react-router-dom";
import API from '../../utils/API';
import querystring from 'querystring';
import hash from 'js-sha256';
import { Button, Form, Grid, Header, Image, Message, Segment, Modal, Icon} from 'semantic-ui-react'
import { set } from 'mongoose';

class Signup extends React.Component{

  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      username: "",
      email:"",
      password: "",
      confirm: "",
      modalOpen: false,
      passwordMatch: false,
      passwordError: false,
      emailError: false,
      usernameError:false
    }
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
    handleEmail= (event) => {
        this.setState({ email: event.target.value });
        console.log(this.state.email)
      }

    handlePasswordConfirm = (event) => {
        this.setState({ confirm: event.target.value });
        console.log(this.state.confirm)

      }


      errorhandler = (event)=>{

        event.preventDefault();
        let error = false;

        if (this.email === '')

          {
            this.setState({emailError: true})
            error = true
          }else {
            this.setState({emailError: false})

          }

          if (this.password <6)

          {
            this.setState({passwordError: true})
            error = true
          }else {
            this.setState({passwordError: false})

          }

          if (this.password != this.confirm)

          {
            this.setState({passwordMatch: true})
            error = true
          }else {
            this.setState({passwordMatch: false})

          }

          if (error === true){


          }
      }




  handleSignup = async (event) => {

    event.preventDefault();

    if (!this.state.email.includes("@")) {
      alert("Please Enter a Valid E-mail Address!");
      this.setState({ email: "" });
    } else if (this.state.password !== this.state.confirm) {
      alert("Passwords don't Match!");
      this.setState({ password: "", confirm: ""});
    } else if (this.state.password === "" || this.state.username === ""  || this.state.email === ""){
      this.handleOpen();
    } else {
      const data = querystring.stringify({
        "username": this.state.username,
        "password": hash.sha256(this.state.password),
        "email": this.state.email
      });

      const res = await API.register(data);
      if(res.data === 404) {
        alert("Username already exists or Email is already in use!");
        this.setState({ username: "", email: "", password: "", confirm: "" })
      } else {
        setTimeout(function(){ window.location = res.headers.location; }, 1000);
      }
    }
  }

  render() {

    const nameLink = Link.state( this, 'username').check(x => x,"Name is Required").check( x => x.indexOf("") < 0, "Name shouldn’t contain spaces");

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
      size='mini'
      textAlign='center'
      style={{ height: '100%' }}
       verticalAlign='middle'
    >
      <Header content='Hey There ! ' />
      <Modal.Content>
        <h3>All the fields must be filled !! </h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={this.handleClose} inverted>
          <Icon name='checkmark' /> Got it
        </Button>
      </Modal.Actions>
    </Modal>

              <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                  <Header as='h2' color='black' textAlign='center'>
                    <Image src='/logo.png' /> Log-in to your account
                  </Header>
                  <Form size='large' onSubmit = {this.handleSignup}>
                    <Segment stacked>

                      <Form.Input fluid  icon='user' label = 'Username' iconPosition='left' placeholder='Username' value = {this.state.username} onChange = {this.handleUserChange} valueLink = {nameLink}/>

                      <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' value = {this.state.email} onChange = {this.handleEmail}/>
                      <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange = {this.handlePassword}
                        value = {this.state.password}
                        error = {this.passwordError || this.passwordMatch}
                      />
                       <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Confirm Password'
                        value={this.state.confirm}
                        onChange = {this.handlePasswordConfirm}
                        type='password'

                      />

                      <Button color='black' fluid size='large' type = "submit" >
                        Signup
                      </Button>
                    </Segment>
                  </Form>

                </Grid.Column>
              </Grid>
            </div>



    );
  }

}

export default Signup;

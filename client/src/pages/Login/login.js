import React from 'react';
import querystring from 'querystring';
import API from './../../utils/API.js';
import hash from 'js-sha256';
// import { Redirect } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment , Modal, Icon, Divider} from 'semantic-ui-react'
import logo from '../../assets/BBLOGO.png'

class Login extends React.Component{

  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      username: "",
      password: "",
      modalOpen: false
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


  //Manage login
  handleLogin = async (event) => {

    event.preventDefault();

    if (this.state.password === "" || this.state.username === "" ){
      this.handleOpen();

    } else {
      const data = querystring.stringify({
        "username": this.state.username,
        "password": hash.sha256(this.state.password),
      });
      // const res = await API.register(this.state.username, this.state.password, this.state.email)
      const res = await API.login(data);
      if(res.data === 404) {
        this.setState({ username: "", password: "" })
        alert("Incorrect password");
      } else {
        setTimeout(function(){ window.location = res.headers.location; }, 1000);
      }
    }


  }

  render() {
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
          
          <br/><br/> --  Log-in to Your Account --
          </Header>

          <Form size='large'>
            <Segment basic>
              <Form.Input fluid iconPosition='left' placeholder='username' value={this.state.username} onChange = {this.handleUserChange}/>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={this.state.password}
                onChange = {this.handlePassword}
              />
                <Button animated='vertical' basic color='black' fluid size='large' onClick = {this.handleLogin}>
                  <Button.Content visible>Login</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
              </Button>
            </Segment>
          </Form>      
            Don't have a Bubbles account? <a href='/register' style = {{color:'#a08000'}}>Sign Up</a>
            <br/>
            <a href='/' style = {{color: '#8bb2ff'}}><Icon name ='angle double left'/> Return to Home Page</a>
        </Grid.Column>
      </Grid>


    </div>





    );
  }

}

export default Login;

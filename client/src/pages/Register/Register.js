import React from 'react'
// import { Redirect } from "react-router-dom";
import API from '../../utils/API';
import querystring from 'querystring';
import hash from 'js-sha256';
import { Button, Form, Grid, Header, Image, Message, Segment, Modal, Icon} from 'semantic-ui-react'

class Signup extends React.Component{

  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      username: "",
      email:"",
      password: "",
      confirm: "",
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

    // Keep track of what user types into email input so that input can be grabbed later
    handleEmail= (event) => {
        this.setState({ email: event.target.value });
        console.log(this.state.email)
      }

    handlePasswordConfirm = (event) => {
        this.setState({ confirm: event.target.value });
        console.log(this.state.confirm)

      }


  passwordConfirm = () => {

    if ( this.state.password === this.state.confirm){


    }

  }

  handleSignup = async (event) => {

    event.preventDefault();

    if (this.state.password === "" || this.state.username === ""  || this.state.email === ""){
      this.handleOpen();
    } else {
      const data = querystring.stringify({
        "username": this.state.username,
        "password": hash.sha256(this.state.password),
        "email": this.state.email
      });
      // const res = await API.register(this.state.username, this.state.password, this.state.email)
      const res = await API.register(data);
      console.log(res.headers.location);
      window.location = res.headers.location;
    }
  }

  render() {
    return (


            <div className='login-form'>
              {/*
                Heads up! The styles below are necessary for the correct render of this example.
                You can do same with CSS, the main idea is that all the elements up to the `Grid`
                below must have a height of 100%.
              */}
              <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                  height: 100%;
                }
              `}</style>

       <Modal
      trigger={<Button onClick={this.handleOpen}></Button>}
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
                  <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange = {this.handleUserChange}/>
                      <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' onChange = {this.handleEmail} />
                      <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange = {this.handlePassword}
                      />
                       <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Confirm Password'
                        type='password'
                        onChange= {this.handlePasswordConfirm}
                      />

                      <Button color='black' fluid size='large' onClick = {this.handleSignup}>
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

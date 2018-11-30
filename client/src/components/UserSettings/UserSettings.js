import React, { Component } from 'react'
import API from '../../utils/API';
import querystring from 'querystring';
import { Button, Header, Modal, Form, Input, Icon } from 'semantic-ui-react'
import UserAvatar from '../UserAvatar';


export default class UserSettingsModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })


  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      activeItem: 'user' , username:'', userimage:''
    }
  }


  componentDidMount() {
    this.loadData();
}

  loadData = async () => {
   const user = await API.dashboardInfo();

   this.setState({username: user.data.username})
   if(user && user.data.image) {
     this.setState({ userimage: user.data.image })
   }
  }

  change = (event) => {
    if (event.target.files && event.target.files[0]) {
      const a = this;
      const reader = new FileReader();

      reader.onload = async function (e) {
        a.setState({ userimage: e.target.result });
        const data = querystring.stringify({
          "image": e.target.result
        });
        const post = await API.postPhoto(data);
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <div className="UserSetting"  onClick={this.show('blurring')}>
          <Header as='h4'>
          <Icon name='settings' />
          <Header.Content>
            Account Settings
          </Header.Content>
          </Header>
        </div>
        <Modal dimmer={dimmer} open={open} onClose={this.close} closeIcon >
          <Modal.Header>Manage Account Settings</Modal.Header>
          <Modal.Content>
          <Form>
            <Form.Field>
              <label>Update Username</label>
              <input placeholder='New Username' />
            </Form.Field>
            <Form.Field>
                <label for="userimage">    Update Avatar </label>
                <Input onChange={this.change} type="file" id="userimage" name="userimage" accept="image/png, image/jpeg"></Input>
                <UserAvatar username = {this.state.username} userimage={this.state.userimage}/>
            </Form.Field>
          </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button basic 
              color = 'black'
              icon='checkmark'
              labelPosition='right'
              content="Update Settings"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}


import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Input, Icon } from 'semantic-ui-react'
import FormBubble from '../FormBubble';

export default class UserSettingsModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <div className="UserSetting"  onClick={this.show('blurring')}>
          <Header as='h4'>
          <Icon name='settings' />
          <Header.Content>
            Account Settings
            <Header.Subheader>Manage preferences</Header.Subheader>
          </Header.Content>
          </Header>
        </div>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Create a New Bubble</Modal.Header>
          <Modal.Content>
            <FormBubble> </FormBubble>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope, nvm. 
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Make New Bubble!"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}


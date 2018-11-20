import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Input, Icon } from 'semantic-ui-react'
import FormBubble from '../FormBubble';

class AddBubbleModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button onClick={this.show('blurring')}>
        <Icon loading size='big' name='spinner'/>
        Create New Bubble
        </Button>

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

export default AddBubbleModal

import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Input  } from 'semantic-ui-react'
import FormBubble from '../FormBubble';

class AddBubbleModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button onClick={this.show('blurring')}>Blurring</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Create a New Bubble</Modal.Header>
          <Modal.Content>
            <FormBubble> </FormBubble>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Yep, that's me"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default AddBubbleModal

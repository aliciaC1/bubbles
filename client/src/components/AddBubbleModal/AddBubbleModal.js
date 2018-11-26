import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Input, Icon } from 'semantic-ui-react'
import FormBubble from '../FormBubble';
import API from '../../utils/API';
import querystring from 'querystring';

class AddBubbleModal extends Component {
  state = { open: false , name:'' }

  show = dimmer => () => this.setState({ dimmer, open: true })
  createBubble = () =>{ 
    this.setState({ open: false })  

    API.createBubble({name: this.state.name}).then(
      function(res) {
console.log(res)

      }
    )
 
    
  }

         
 

  handleChange = (event) => {

    this.setState({name : event.target.value})
    console.log(event.target.value)
  }

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <div className="AddBubble"  onClick={this.show('blurring')}>
          <Header as='h4'>
          <Icon name='plus' />
          <Header.Content>Bubble</Header.Content>
          </Header>
        </div>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Create a New Bubble</Modal.Header>
          <Modal.Content>
            {/* <FormBubble> </FormBubble> */}
            <Form>
            <Form.Field required>
              <label>Bubble Name</label>
              <Input placeholder='Bubble Name' name= "name" onChange = {this.handleChange}/>
            </Form.Field>
          </Form>
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
              onClick={this.createBubble}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default AddBubbleModal

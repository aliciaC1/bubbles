import React, { Component } from 'react'
import { Button, Header, Modal, Form, Input, Icon, Radio } from 'semantic-ui-react'
import FormBubble from '../FormBubble';
import API from '../../utils/API';
import querystring from 'querystring';

class AddBubbleModal extends Component {
  state = { open: false, name: '' }

  show = dimmer => () => this.setState({ dimmer, open: true })

  createBubble = () => {

    console.log("props", this.props)
    let bubbles = this.props.bubbles;
    this.setState({ open: false })

    API.createBubble({ name: this.state.name }).then(res => {
      console.log("WHAT DIS", res.data)
      bubbles.push(res.data);
      this.props.updateBubbles(bubbles)

    }
    )


  }


  handleChange = (event) => {

    this.setState({ name: event.target.value })
    console.log(event.target.value)
  }

  render() {
    const { open, dimmer } = this.state
    const value = ''

    return (
      <div>
        <div className="AddBubble" onClick={this.show('blurring')}>
          <Header as='h4'>
            <Icon name='plus' />
            <Header.Content>Bubble</Header.Content>
          </Header>
        </div>
        <Modal closeIcon dimmer={dimmer} open={open} onClose={this.close} >
          <Modal.Header>Create a New Bubble</Modal.Header>
          <Modal.Content>
            {/* <FormBubble> </FormBubble> */}
            <Form>
              <Form.Field required>
                  <label>Bubble Name</label>
                  <Input placeholder='Bubble Name' name="name" onChange={this.handleChange} />
                </Form.Field>
                <Form.Group required inline>
              <label>Bubble Rank (1 : Most Inner | 3 : Most Outer) </label>
              <Form.Field 
                required
                control={Radio}
                label='1'
                value='1'
                checked={value === '1'}
                onChange={this.handleChange}
              />
              <Form.Field
                required
                control={Radio}
                label='2'
                value='2'
                checked={value === '2'}
                onChange={this.handleChange}
              />
              <Form.Field
                required
                control={Radio}
                label='3'
                value='3'
                checked={value === '3'}
                onChange={this.handleChange}
              />
            </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
          {/* <Button
              positive
              icon='x'
              labelPosition='right'
              content="No Bubble!"
              onClick={this.onClose}
            /> */}
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

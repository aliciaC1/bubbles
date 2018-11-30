import React, { Component }from 'react'
import { Form, Input,Dropdown, Button } from 'semantic-ui-react'

class AddBubbleForm extends Component {
  state = {name: ''}
  bubbleOptions = [ { value: 1, text: 'Circle One' }, { value: 2, text: 'Circle Two' },{ value: 3, text: 'Circle Three' }  ]
 
  handleChange = (e, { value }) => this.setState({ value })
  
  createBubble = () => {

    console.log(this.state.name)
  }

  render() {
    // const { value } = this.state
    return(
      <Form>
      <Form.Field required>
        <label>Bubble Name</label>
        <Input onMouseDown={e => e.stopPropagation()} placeholder='Bubble Name' />
      </Form.Field>
      <Form.Group required inline>
            <label>Bubble Circle</label>
            <Dropdown placeholder='Bubble Circle' search selection options={this.bubbleOptions} />
          </Form.Group>
          <Form.Field control = {Button} onClick= {this.createBubble}>Update</Form.Field>
    </Form>
    );
  }
} 
 


export default AddBubbleForm

// missing submit button **** 

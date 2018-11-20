import React, { Component }from 'react'
import { Form, Input,Radio, Button } from 'semantic-ui-react'

class AddBubbleForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return(
      <Form>
      <Form.Field required>
        <label>Bubble Name</label>
        <Input placeholder='Bubble Name' />
      </Form.Field>
      <Form.Group required inline>
            <label>Bubble Rank (1 : Coolest | 5 : Uncoolest) </label>
            <Form.Field 
              required
              control={Radio}
              label='Coolest'
              value='1'
              checked={value === '1'}
              onChange={this.handleChange}
            />
            <Form.Field
              required
              control={Radio}
              label='Pretty Cool'
              value='2'
              checked={value === '2'}
              onChange={this.handleChange}
            />
            <Form.Field
              required
              control={Radio}
              label='Cool'
              value='3'
              checked={value === '3'}
              onChange={this.handleChange}
            />
             <Form.Field
              required
              control={Radio}
              label='Uncool'
              value='4'
              checked={value === '4'}
              onChange={this.handleChange}
            />
             <Form.Field
              required
              control={Radio}
              label='Lame'
              value='5'
              checked={value === '5'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field control = {Button}>Make New Bubble!</Form.Field>
    </Form>
    );
  }
} 
 


export default AddBubbleForm

// missing submit button **** 

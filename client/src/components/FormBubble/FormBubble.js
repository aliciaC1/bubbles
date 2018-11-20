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
          <Form.Field control = {Button}>Submit</Form.Field>
    </Form>
    );
  }
} 
 


export default AddBubbleForm

// missing submit button **** 

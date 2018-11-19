import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const FormExampleRequiredField = () => (
  <Form>
    <Form.Field required>
      <label>Bubble Name</label>
      <Input placeholder='Bubble Name' />
    </Form.Field>
    <Form.Group inline>
          <label>Bubble Rank (1 : Coolest | 5 : Uncoolest)</label>
          <Form.Field
            control={Radio}
            label='Coolest'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Pretty Cool'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Cool'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
           <Form.Field
            control={Radio}
            label='Uncool'
            value='4'
            checked={value === '4'}
            onChange={this.handleChange}
          />
           <Form.Field
            control={Radio}
            label='Lame'
            value='5'
            checked={value === '5'}
            onChange={this.handleChange}
          />
        </Form.Group>
  </Form>
)

export default FormExampleRequiredField

// missing submit button **** 

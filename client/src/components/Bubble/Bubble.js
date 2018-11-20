import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import BubbleWindow from '../BubbleWindow';

class Bubble extends React.Component {
    constructor () {
      super()
      this.state = {
        isHidden: true
      }
    }
    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    render () {
      return (
        <div>
          <Icon onClick={this.toggleHidden.bind(this)} loading size='massive' name='circle notch'/>
          {!this.state.isHidden && <Window />}
        </div>
      )
    }
  }
  
  const Window = () => (
  <BubbleWindow></BubbleWindow>
  )

export default Bubble;
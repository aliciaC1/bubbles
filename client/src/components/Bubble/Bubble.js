import React from 'react';
import { Icon } from 'semantic-ui-react';
import BubbleWindow from '../BubbleWindow';


class Bubble extends React.Component {

  state = {
    isHidden: true
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render() {
    return (
      <div>
        <Icon onClick={this.toggleHidden.bind(this)} loading size='massive' name='circle notch' />
        {!this.state.isHidden && <BubbleWindow name={this.props.name} />}
      </div>
    )
  }
}



export default Bubble;
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import BubbleWindow from '../BubbleWindow';
import API from '../../utils/API'


class Bubble extends React.Component {
  constructor() {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }



  render() {
    return (
      <div>
        <Icon onClick={this.toggleHidden.bind(this)} loading size='massive' name='circle' />
        {!this.state.isHidden &&
          <BubbleWindow
            name={this.props.id}
            username={this.props.username}
            updatePost={this.props.updatePost}
            posts={this.props.posts}
            users={this.props.users}
          />}
      </div>
    )
  }
}

// const Window = () => (
//   <BubbleWindow />
// )

export default Bubble;
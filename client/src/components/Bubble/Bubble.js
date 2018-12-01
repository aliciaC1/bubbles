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

  componentDidMount() {
    this.getbubbleInfo()

  }

  getbubbleInfo = async () => {

    const posts = await API.findbubble(this.props.id)
    console.log(posts)
    let { _userId } = posts.data
    console.log(posts.data._postId)

    this.setState({
      posts: posts.data._postId,
      users: _userId
    })
  }



  updatePost = (post) => {
    this.setState({
      posts: post,

    })

  }

  render() {
    return (
      <div>
        <Icon onClick={this.toggleHidden.bind(this)} loading size='massive' name='circle' />
        {!this.state.isHidden &&
          <BubbleWindow
            bubbleID={this.props.id}
            name={this.props.name}
            username={this.props.username}
            posts={this.state.posts}
            users={this.state.users}
            updatePost={this.updatePost}
          />}
      </div>
    )
  }
}

// const Window = () => (
//   <BubbleWindow />
// )

export default Bubble;
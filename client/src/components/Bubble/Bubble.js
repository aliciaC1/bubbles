import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import BubbleWindow from '../BubbleWindow';
import API from '../../utils/API'


class Bubble extends React.Component {

  state = {
    isHidden: true,
    post: [],
    users: []

  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }


  componentDidMount() {
    this.getbubbleInfo()
    console.log(this.state.post)
  }

  updatePost = (posts) => {

    this.setState({
      posts
    })
  }

  getbubbleInfo = async () => {

    const posts = await API.findbubble(this.props.id)
    console.log(posts.data)
    let { _userId } = posts.data
    console.log(posts.data._postId)

    this.setState({
      posts: posts.data._postId,
      users: _userId
    })
  }


  render() {
    return (
      <div>
        <Icon onClick={this.toggleHidden.bind(this)} loading size='massive' name='circle' />
        {!this.state.isHidden &&
          <BubbleWindow
            name={this.props.name}
            username={this.props.username}
            posts={this.state.post}
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
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import BubbleWindow from '../BubbleWindow';
import API from '../../utils/API'


class Bubble extends React.Component {

  state = {
    isHidden: true,
    posts: [],
    users: []

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

    const res = await API.findbubble(this.props.id)
    console.log(res)
    let { _userId } = res.data
    console.log(res.data._postId)


    this.setState({
      posts: res.data._postId,
      users: _userId
    })
  }



  updatePost = (posts) => {

    this.setState({ posts: posts })


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
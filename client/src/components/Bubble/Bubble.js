import React from 'react';
import { Reveal } from 'semantic-ui-react';
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
            <Reveal animated='move down'>
          <Reveal.Content visible>
          <div className='circle' onClick={this.toggleHidden.bind(this)} name={this.props.name}></div>
          </Reveal.Content>
          <Reveal.Content hidden>
          <div className='circle2' onClick={this.toggleHidden.bind(this)} name={this.props.name}>
          <p><svg viewBox="0 0 500 500">
          <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
          <text width="500">
            <textPath xlink href="#curve">
              {this.props.name}
            </textPath>
          </text>
          </svg></p>
          </div>
          </Reveal.Content>
        </Reveal>
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
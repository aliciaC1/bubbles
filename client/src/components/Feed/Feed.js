import React, { Component } from 'react'
import { Segment, Grid, List, Header, Icon, Divider, Form, Button } from 'semantic-ui-react'
import BubbleMembers from '../BubbleMembers';
import PostText from '../PostText';
import API from '../../utils/API';

const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVScX44baeJmxuLCUK3ZqRzWWHxsLwJnboI8kCqHp7UbSIAWrR"


class FeedView extends Component {

  handleChange = (event) => {
    this.setState({
      messageBody: event.target.value
    })
  }

  createPost = async (post) => {

    const newPost = await API.createpost(post)

    this.props.updatePost(newPost)
  }

  handleSubmit = () => {

    let obj = {
      messageBody: this.state.messageBody,
      bubbleid: this.props.bubbleID
    }

    this.createPost(obj)

    console.log(this.props.posts)
  }



  render() {

    return (
      <Grid.Row>
        <Grid.Column>
          <Header as='h2' icon textAlign='center'>
            <Icon name='ellipsis horizontal' circular />
            <Header.Content><Divider horizontal>Activity Feed</Divider></Header.Content>
          </Header>
          <Grid.Column width={6}>
            <Grid celled='internally'>
              <Grid.Row>
                <Grid.Column width={4}>
                  <div className="memberDisplay">
                    <List animated verticalAlign='middle'>

                      {this.props.users ? (
                        this.props.users.map(user => (
                          <BubbleMembers
                            member={user.username}
                            avatar={src}
                          />
                        ))) : null
                      }


                    </List>
                  </div>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Segment basic fluid>
                    <div className="PostDisplay">
                      {this.props.posts ? (
                        this.props.posts.map(post => (
                          <PostText
                            avatar={src}
                            timeAgo={post.date}
                            author={post._userId}
                            postBody={post.messageBody}
                            likes='2' />
                        ))) : null
                      }


                    </div>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Column>
        <Grid.Row>
          <Grid.Row>
            <Segment basic padded fluid>
              <Divider horizontal>POST</Divider>
              {/* Post Form */}
              <div className="PostArea">
                {/* ================================================Post Form ======================== */}
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.TextArea onMouseDown={e => e.stopPropagation()} placeholder='Type Away...' post='post' onChange={this.handleChange} style={{ minWidth: 425 }} />
                    <Button basic color='black' animated='vertical'>
                      <Button.Content hidden>POST</Button.Content>
                      <Button.Content visible>
                        <Icon name='angle double up' />
                      </Button.Content>
                    </Button>
                  </Form.Group>
                </Form>
                {/* ================================================Post Form ======================== */}
              </div>
            </Segment>
          </Grid.Row>
        </Grid.Row>
      </Grid.Row>

    );
  }
}



export default FeedView

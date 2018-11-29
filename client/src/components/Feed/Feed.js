import React, { Component } from 'react'
import { Segment, Grid, List, Header, Icon, Divider, Form, Button } from 'semantic-ui-react'
import BubbleMembers from '../BubbleMembers';
import PostText from '../PostText';

const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVScX44baeJmxuLCUK3ZqRzWWHxsLwJnboI8kCqHp7UbSIAWrR"


class FeedView extends Component {


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
                      {/* //Display Bubble members here  */}
                      <BubbleMembers
                        member={this.props.username}
                        avatar={src}
                      />
                    </List>
                  </div>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Segment basic fluid>
                    <div className="PostDisplay">
                      {/* Display Bubble Posts here  */}
                      <PostText
                        avatar={src}
                        timeAgo='3 days ago'
                        author='jonas'
                        postBody='Hello, lets go get some drinks!'
                        likes='2' />
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
                    <Form.TextArea onMouseDown={e => e.stopPropagation()} placeholder='Type Away...' post='post' value={this.state} onChange={this.handleChange} style={{ minWidth: 425 }} />
                    <Button.Group>
                      <Button content="Submit">
                        <Icon name='angle double up' />Post
                    </Button>
                    </Button.Group>
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

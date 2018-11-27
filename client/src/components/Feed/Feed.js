import React from 'react'
import PostText from '../PostText';
import PropTypes from 'prop-types';
import PostImage from '../PostImage';
import PostForm from '../PostForm';

import { Segment, Grid, Image, List, Divider } from 'semantic-ui-react'

const FeedView = () => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={4}>
          <List animated verticalAlign='middle'>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
      <List.Content> User 1
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      <List.Content>
        <List.Header>User 2
        </List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header>User 1
        </List.Header>
      </List.Content>
    </List.Item>
  </List>
      </Grid.Column>
      <Grid.Column width={12}>
      <Segment basic fluid>
      <div className ="display">
        <PostText></PostText>
      </div>
      </Segment>   
      </Grid.Column>
    </Grid.Row>

  </Grid>
)

export default FeedView

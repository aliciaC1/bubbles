import React from 'react'
import { Feed, Comment } from 'semantic-ui-react'

const PostNewMember = () => (
    <Feed.Event>
      <Feed.Label>
        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> joined the Bubble.
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
); 

export default PostNewMember;
import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

const PostText = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label image='/images/avatar/small/laura.jpg' />
      <Feed.Content>
        <Feed.Date>3 days ago</Feed.Date>
        <Feed.Summary>
          <a>Laura Faucet</a> created a post
        </Feed.Summary>
        <Feed.Extra text>Have you seen what's going on in Israel? Can you believe it.</Feed.Extra>
            <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default PostText
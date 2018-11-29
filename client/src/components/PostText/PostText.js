import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

const PostText = props  => (
  <Feed>
    <Feed.Event>
      <Feed.Label image={props.avatar} />
      <Feed.Content>
        <Feed.Date>{props.timeAgo}</Feed.Date>
        <Feed.Summary>
          <a>{props.author}</a> created a post
        </Feed.Summary>
        <Feed.Extra text>{props.postBody}</Feed.Extra>
            <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            {props.likes.length} Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default PostText
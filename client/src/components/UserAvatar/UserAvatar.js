import React from 'react';
import { Image, Header} from 'semantic-ui-react';
import "./UserAvatar.css";

const UserAvatar = (props) => (
  <div>
    <Header as='h2'>
      <Image circular src= {props.avatar} /> 
      <Header.Content>
      {props.username}
    </Header.Content>
    </Header>
  </div>
)

export default UserAvatar
import React from 'react';
import { Image, Icon, Header} from 'semantic-ui-react';
import "./UserAvatar.css";

const UserAvatar = (props) => (
  <div>
    <Header as='h2'>
      <Image circular src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png' /> 
      <Header.Content>
      {props.username}
    </Header.Content>
    </Header>
  </div>
)

export default UserAvatar

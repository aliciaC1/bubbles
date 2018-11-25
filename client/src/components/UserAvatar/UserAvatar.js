import React from 'react';
import { Image, Icon, Header} from 'semantic-ui-react';
import "./UserAvatar.css";

const UserAvatar = () => (
  <div>
    <Header as='h2'>
      <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> 
      <Header.Content>
      Patrick
      {/* <Header.Subheader floated = 'right' ><Icon name='settings' textAlign='right'/></Header.Subheader> */}
    </Header.Content>
    </Header>
  </div>
)

export default UserAvatar
import React from 'react'
import { Image, Icon, Header} from 'semantic-ui-react'

const UserAvatar = () => (
  <div>
    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar size ="tiny"/>
    <Header>Username</Header> 
  </div>
)

export default UserAvatar
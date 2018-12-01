import React, { Component } from 'react'
import { Menu, Icon, Header, Segment, Image } from 'semantic-ui-react'
import UserAvatar from '../UserAvatar';
import UserSettings from '../UserSettings';
import AddBubbleModal from '../AddBubbleModal';
import BubbleColor from '../BubbleColor';

export default class MenuExampleVerticalSecondary extends Component {

  state = {
    activeItem: 'user'
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary>
        <Menu.Item 
          position = 'right'
          name='user' 
          active={activeItem === 'user'} 
          onClick={this.handleItemClick}>
          <UserAvatar username={this.props.username} />
        </Menu.Item>
        <Menu.Item
          // position = 'right'
          name='addBubble'
          active={activeItem === 'addBubble'}
          onClick={this.handleItemClick}
        > <AddBubbleModal bubbles={this.props.bubbles} updateBubbles={this.props.updateBubbles} />
        </Menu.Item>
        <Menu.Item
          // position = 'right'
          name='settings'
          active={activeItem === 'settings'}
          onClick={this.handleItemClick}
        >
          <UserSettings />
        </Menu.Item>
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}  
        >
          <Header as='h4'>
            <Icon name='ban' />
            <Header.Content href='/logout'style = {{color: '#ff0000'}} >Logout</Header.Content>
          </Header>
        </Menu.Item>
      </Menu>
    )
  }
}



// {/* <Header as='h2'>
// <BubbleColor/>
// <Header.Content>3</Header.Content>
// </Header>  */}
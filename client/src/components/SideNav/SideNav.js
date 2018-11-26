import React, { Component } from 'react'
import { Menu, Icon, Header, Segment } from 'semantic-ui-react'
import UserAvatar from '../UserAvatar';
import UserSettings from '../UserSettings';
import AddBubbleModal from '../AddBubbleModal';
import BubbleColor from '../BubbleColor';
import API from '../../utils/API'
import Bubble from '../Bubble';
import Dashboard from '../../pages/Dashboard/Dashboard'

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'user' , username:''}

  componentDidMount() {
    this.loadData()
    
  
}

  loadData = async () =>{

 const user = await API.dashboardInfo();
 console.log(user)
 this.setState({username: user.data.username})
      
  }

 

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick}>
        <UserAvatar username = {this.state.username}/>
          
        
        </Menu.Item>
       <Menu.Item
          name='addBubble'
          active={activeItem === 'addBubble'}
          onClick={this.handleItemClick}
        > <AddBubbleModal/>
        </Menu.Item>       
        <Menu.Item
          name='1'
          active={activeItem === '1'}
          onClick={this.handleItemClick}
        >
          <Segment basic>
            <Header as='h2' floated='left'>
              1
            </Header>
            <Header as='h2' floated='right'>
              <BubbleColor/>
            </Header>
          </Segment>
        </Menu.Item>
        <Menu.Item
          name='2'
          active={activeItem === '2'}
          onClick={this.handleItemClick}
        >
          <Segment basic>
            <Header as='h2' floated='left'>
              2
            </Header>
            <Header as='h2' floated='right'>
              <BubbleColor/>
            </Header>
          </Segment>
        </Menu.Item>
           <Menu.Item
          name='3'
          active={activeItem === '3'}
          onClick={this.handleItemClick}
        >
          <Segment basic>
            <Header as='h2' floated='left'>
              3
            </Header>
            <Header as='h2' floated='right'>
              <BubbleColor/>
            </Header>
          </Segment>
        </Menu.Item>
        <Menu.Item/>
        <Menu.Item
          name='settings'
          active={activeItem === 'settings'}
          onClick={this.handleItemClick}
        >
          <UserSettings/>
        </Menu.Item> 
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
        >
          <Header as='h4'>
            <Icon name='ban'/>
            <Header.Content href = '/logout' >Logout</Header.Content>
          </Header>
        </Menu.Item>
      </Menu>
    )
  }
}


      
{/* <Header as='h2'>
<BubbleColor/>
<Header.Content>3</Header.Content>
</Header>  */}
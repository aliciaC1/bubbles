import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Popup } from 'semantic-ui-react'
import BubbleColor from '../BubbleColor';
import AddBubbleModal from '../AddBubbleModal';
import Bubble from '../Bubble';
import UserAvatar from '../UserAvatar';
import UserSettings from '../UserSettings';



export default class SideNavSidebar extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })
  
  render() {
    const { visible } = this.state
    
    return (
      <div>
          <Button disabled={visible} onClick={this.handleShowClick}>            
          <Icon loading size='big' name='circle notch' />
          {/* <Icon name='sliders horizontal' /> */}
          </Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='wide'
          >
            <Menu.Item as='a'>
            <div>
              <UserAvatar></UserAvatar>
                <Popup
                trigger={<Icon size="small" name ="settings"/>}
                content={<UserSettings/>}
                basic
                />
            </div>
            </Menu.Item>
            <Menu.Item as='a'>
            <AddBubbleModal/>
            </Menu.Item>
            <Menu.Item as='a'>
            <BubbleColor></BubbleColor> <br/>Bubbles 1
            </Menu.Item>
            <Menu.Item as='a'>
            <BubbleColor></BubbleColor> <br/>Bubbles 2
            </Menu.Item>
            <Menu.Item as='a'>
            <BubbleColor></BubbleColor> <br/>Bubbles 3
            </Menu.Item>
            <Menu.Item as='a'>
            <Icon loading size='big' name='x' /> 
            Logout       
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
          <Segment basic
              textAlign='center'
              style={{ minHeight: 1350, padding: '1em 0em' }}
              vertical
              size = 'huge'
            >
              <div className='bubbleArea'>
              <Bubble></Bubble>
              </div>
                 
            {/* <Segment basic>
              <Header as='h3'></Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

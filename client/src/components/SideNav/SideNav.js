import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Popup } from 'semantic-ui-react'
import BubbleColor from '../BubbleColor';
import AddBubbleModal from '../AddBubbleModal';

export default class SideNavSidebar extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>            
          <Icon loading size='big' name='circle notch' />
          {/* <Icon name='sliders horizontal' /> */}
          </Button>
        </Button.Group>

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
              <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar size='tiny' />
              <span size = "small" float ="right">Hi, Username</span>
            </div>
            </Menu.Item>
            <Menu.Item as='a'>
            <AddBubbleModal></AddBubbleModal>
            </Menu.Item>
            <Menu.Item as='a'>
              <Popup 
                trigger={<Icon loading size='huge' name='circle notch'/>} 
                flowing
                position='right center' 
                on='click'>
                  <BubbleColor></BubbleColor>
              </Popup>
              Coolest
            </Menu.Item>
            <Menu.Item as='a'>
              <Popup 
                trigger={<Button>Pretty Cool  <Icon loading size='big' name='circle notch'/></Button>} 
                flowing
                position='right center' 
                on='click'>
                  <BubbleColor></BubbleColor>
              </Popup>
            </Menu.Item>
            <Menu.Item as='a'>
              <Popup 
                trigger={<Button>Plain Cool  <Icon loading size='big' name='circle notch'/></Button>} 
                flowing
                position='right center' 
                on='click'>
                  <BubbleColor></BubbleColor>
              </Popup>
            </Menu.Item>
            <Menu.Item as='a'>
              <Popup 
                trigger={<Button>Uncool  <Icon loading size='big' name='circle notch'/></Button>} 
                flowing
                position='right center' 
                on='click'>
                  <BubbleColor></BubbleColor>
              </Popup>
            </Menu.Item>
            <Menu.Item as='a'>
            <BubbleColor></BubbleColor> LAME
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
              {/* <Icon.Group size='huge'> */}
                <Icon loading size='massive' name='circle notch' />
                {/* <Icon name='user' /> */}
              {/* </Icon.Group> */}
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

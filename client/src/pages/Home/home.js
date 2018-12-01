import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Icon,
  Grid,
  Header,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Image
} from 'semantic-ui-react'
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons'
import { controller, AnimatedValue, createAnimatedComponent, SpringAnimation, config } from 'react-spring'
import './home.css';
import logo from '../../assets/blogowhite.png'
// import HomeSlider from '../../components/HomeSlider'
import panel1 from '../../assets/P1.png';
import sidelogo from '../../assets/sidelogo.png';
import iconsbubble from '../../assets/iconsbubble.png';
import logotitle from '../../assets/logotitle.png';

const front = (<Image src={panel1}/>)
const title = (<Image src = {logotitle}/>)
const circleimg = (<Image src = {iconsbubble}/>)
const sideimg = (<Image src ={sidelogo} style={{height:'1029px', width:'auto'}} />)

const Page = ({ offset, caption, first, second, gradient, onClick, image }) => (
  <React.Fragment>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick} style={{ overflowX: 'auto'}} onScroll={e => e.stopPropagation()}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className="text" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>

    <ParallaxLayer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <div>{first}</div>
        <div>{second}</div>
        <div>{image}</div>
      </span>
    </ParallaxLayer>
  </React.Fragment>
)

const bubbleDes = '';
const statement = 'As the anti-social media app, Bubbles is commited to providing users with a personal way to connect with friends and family without compromising the user\'s privacy. We do not believe in selling user data and aim to keep the user\'s experience as intimiate and secure as possible. We value the user\'s right in keeping their information and connections personal.'; 
const getStarted = (
  <Button.Group >
  <Button inverted color ='teal' as='a' href = '/login'>Login</Button>
  <Button.Or inverted text='' />
  <Button inverted color = 'grey' as='a' href='/register'>Sign Up</Button>
  </Button.Group>
  )  

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          // onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            basic
            inverted
            textAlign='center'
            style={{padding: '.2em 0em' }}
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item>
                <Image src ={logo} style={{height: '58px', width: 'auto'}}/>
                </Menu.Item>
                <Menu.Item position = 'right'>{getStarted}</Menu.Item>
                {/* <Menu.Item position='right' as='a'  href='/login'>
                    Login
                </Menu.Item>
                <Menu.Item  as='a'  href='/register'>
                Sign Up
                </Menu.Item> */}
  
              </Container>
            </Menu>
            {/* <HomeSlider></HomeSlider> */}
  
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a' href='/login'>Log in</Menu.Item>
            <Menu.Item as='a' href='/register'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 1350, padding: '1em 0em' }}
              
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }} href='/register'>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

class HomepageLayout extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render(){
    return (
 
      <ResponsiveContainer>
      <Parallax className="container" ref="parallax" pages={3} horizontal scrolling={false}>
        <Page className = "firstSlide"
        offset={0} 
        gradient="pink" 
        caption="who we are" 
        first={front}
        second="dolor sit" 
        onClick={() => this.scroll(1)} 
        />
        <Page 
        offset={1} 
        gradient="black" 
        caption="what we d" 
        first={sideimg}
        second="adipiscing elit" 
        onClick={() => this.scroll(2)} 
        />
        <Page 
        offset={2} 
        gradient="tomato" 
        caption="Our Mission Statement" 
        first={statement}
        // second="est dignissim" 
        onClick={() => this.scroll(0)} />
   
      </Parallax>
    {/* footer  */}
      <Segment basic inverted style={{ padding: '5em 0em', marginTop: '1000px' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={6}>
              <Header inverted as='h4' >
                Bubbles: The Anti-Social Media Social Media App 
                </Header>
                <p>
                  <Icon name ='github' size = ''/>View on Github 
                  <br/>
                  <br/>
                  Bubbles© Copyright 2018
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as='h4' inverted content='Team' />
                <List inverted link >
                  <List.Item as='a' href='https://github.com/LRPuno'>Luis Rishi Puno || Project Manager | Database Design  </List.Item>
                  <List.Item as='a' href='https://github.com/AngelusQQ'>William Ma || Back-End OAuth</List.Item>
                  <List.Item as='a' href='https://github.com/jame08'>Jonas Morel || Full-Stack React</List.Item> 
                  <List.Item as='a' href='https://github.com/aliciaC1'>Alicia Chan || UI / UX | Front-End React</List.Item>
                  <List.Item as='a' href='https://github.com/aabrole'>Aman Abole || Chat Feature</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
    )
    
  }
}
 
export default HomepageLayout

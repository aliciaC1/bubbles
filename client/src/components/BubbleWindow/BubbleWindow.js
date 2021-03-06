import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';
import { Rnd } from "react-rnd";
import { Grid, Icon, Popup, Image, Button } from 'semantic-ui-react';
import Feed from '../Feed';
import ImageGallery from '../ImageGallery';
import UserAvatar from '../UserAvatar';
import FormBubble from '../FormBubble';
import './BubbleWindow.css';
import axios from 'axios';
import smlogo from '../../assets/logoblack.png'

const style = {
  borderRadius: 0,
  opacity: 0.85,
  padding: '2em',
}

class BubbleWindow extends Component {

  constructor() {
    super();
    this.state = {
      width: 1450,
      height: 980,
      x: 10,
      y: 10,
      visible: true
    };
    this.onCloseClick = this.onCloseClick.bind(this)
  }

  static defaultProps = {
    color: '#5e9bff',
    theme: 'light',
  };

  getInvite = async () => {
    const route = `/api/bubble/${this.props.bubbleID}/invite`
    const link = await axios.get(route);
    alert(`Invite Link: ${link.data}`)
  }

  onCloseClick(event) {
    event.preventDefault()
    this.setState(prevState => ({
      visible: !prevState.visible,
    }))
  }

  render() {
    if (!this.state.visible) {
      return null
    }
    return (
      // Settings regarding window


      <Rnd
        style={{ zIndex: 100 }}
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={(e, d) => {
          this.setState({ x: d.x, y: d.y });
        }}
        onResize={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          });
        }}
      >

        <Window
          color={this.props.color}
          theme={this.props.theme}
          chrome
          minHeight="500px"
          minWidth="500px"
          height="900px"
          width="1200px"
          padding="10px"
        >
          <TitleBar title={this.props.name}
            controls
            // isMaximized={this.state.isMaximized}
            theme={this.props.theme}
            background={this.props.color}
            onCloseClick={this.onCloseClick}
            onMinimizeClick={this.onCloseClick}
            onMaximizeClick={this.toggleMaximize}
            onRestoreDownClick={this.toggleMaximize}
          />

          {/* Displays Window Body Content */}
          {/* Displays TopBar Avatar + Settings */}
          <Grid celled='internally'>
          <Grid.Row  columns={3}>
          <Grid.Column verticalAlign='middle'>
            
            <Image src = {smlogo} textAlign='center' size ='small' style ={{margin:'auto', marginTop: '-10px'}}/>
          </Grid.Column>
          <Grid.Column >
            <Popup
                        trigger={
                          <Button basic color='black' animated='vertical' style={{
                            marginLeft: '104px',
                            marginTop: '2px'}}>
                            <Button.Content visible> <Icon name='settings' /> Bubble Settings</Button.Content>
                            <Button.Content hidden>Manage Preferences</Button.Content>
                          </Button>
                        }
                        content={<FormBubble />}
                        on='click'
                        style={style}
                        wide
                      />
          </Grid.Column>
          <Grid.Column>
            <Popup 
                        trigger={
                          <Button basic color='black' animated='vertical' style={{
                            marginLeft: '104px',
                            marginTop: '2px'}}>
                            <Button.Content visible> <Icon name='magic' /> Magic Link</Button.Content>
                            <Button.Content onClick={this.getInvite} hidden>Invite Members</Button.Content>
                          </Button>
                        }
                        content={'magic link add members'}
                        on='click'
                        style={style}
                        inverted
                      />
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8} textAlign="center">
              {/* Display Post Feed Here  */}
              <Feed
                username={this.props.username}
                posts={this.props.posts}
                users={this.props.users}
                updatePost={this.props.updatePost}
                bubbleID={this.props.bubbleID}
              />
            </Grid.Column>
            <Grid.Column width={8} textAlign="center">
              {/* Display Image Feed Here  */}
              <ImageGallery bubbleID={this.props.bubbleID} />
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </Window>

      </Rnd>
    );
  }
}

export default BubbleWindow;

import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';
import { Grid, Icon, Popup, List, Button } from 'semantic-ui-react';
import Feed from '../Feed';
import ImageGallery from '../ImageGallery';
import UserAvatar from '../UserAvatar';
import FormBubble from '../FormBubble';
import './BubbleWindow.css';


const style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: '2em',
}



class BubbleWindow extends Component {
  static defaultProps = {
    color: '#5e9bff',
    theme: 'light',
    visible: true
  };

  onCloseClick() {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }))
  }

  render() {
    return (
      // Settings regarding window 
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
          onCloseClick={this.close}
          onMinimizeClick={this.minimize}
          onMaximizeClick={this.toggleMaximize}
          onRestoreDownClick={this.toggleMaximize}
        />

        {/* Displays Window Body Content */}
        {/* Displays TopBar Avatar + Settings */}
        <Grid padded celled='internally'>
          <Grid.Row>
            <div className="controlWindow">
              <List divided horizontal size='small' textAlign='center'>
                <List.Item>
                  <List.Content>
                    {/* Show User's Avatar + Name here  */}
                    <UserAvatar />
                  </List.Content>
                </List.Item>
                <List.Item>
                  {/* Bubble Settings here  */}
                  <List.Content>
                    <Popup
                      trigger={<Button icon='settings' content='Bubble Setting' />}
                      content={<FormBubble />}
                      on='click'
                      style={style}
                    />
                  </List.Content>
                </List.Item>
                <List.Item>
                  {/* Bubble Magic Link Button here  */}
                  <List.Content>
                    <Popup
                      trigger={<Button icon='magic' content='Magic Link' />}
                      content={'magic link add members'}
                      on='click'
                      style={style}
                      inverted
                    />
                  </List.Content>
                </List.Item>
              </List>
            </div>
          </Grid.Row>
          <Grid.Column width={8} textAlign="center">
            <Feed
              users={this.props.users}
              posts={this.props.posts}
              updatePost={this.props.updatePost} />
          </Grid.Column>
          <Grid.Column width={8} textAlign="center">
            {/* Display Image Feed Here  */}
            <ImageGallery />
          </Grid.Column>
        </Grid>
      </Window>
    );
  }
}

export default BubbleWindow;

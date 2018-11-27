import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';
import { Grid, Image, Divider, Input, Icon,Popup, List, Segment, Header} from 'semantic-ui-react';
// import Feed from '../Feed';
import ImageGallery from '../ImageGallery';
import BubbleSettings from '../BubbleSettings';
import UserAvatar from '../UserAvatar';
import BubbleSettingHeader from '../BubbleSettingHeader';
import PostForm from '../PostForm';
// import {Posts, PostFeed, PostForm} from '../posts';
import './BubbleWindow.css';
import FileUpload from '../FileUpload';

class BubbleWindow extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  render() {
    return (

      <Window
        color={this.props.color}
        theme={this.props.theme}
        chrome
        minHeight ="500px"
        minWidth ="500px"
        height="900px"
        width = "1200px"
        padding="10px"
      >
        <TitleBar title="Coolest Bubble" 
          controls
          // isMaximized={this.state.isMaximized}
          theme={this.props.theme}
          background={this.props.color}
          onCloseClick={this.close}
          onMinimizeClick={this.minimize}
          onMaximizeClick={this.toggleMaximize}
          onRestoreDownClick={this.toggleMaximize}
          />
      <div>
  <Grid.Row>
    <Grid columns={2} padded celled='internally'>
   
    <Grid.Column>
      <Header as='h2' icon textAlign='center'>
      <Icon name='ellipsis horizontal' circular />
      <Header.Content><Divider horizontal>Activity Feed</Divider></Header.Content>
    </Header>
        <Grid.Column width={6}>
            {/* <Feed/> */}
        </Grid.Column>
      </Grid.Column>
      <Grid.Column textAlign="center">
        
        
        <Grid.Row>
        <Header as='h2' icon textAlign='center'>
          <Icon name='images outline' circular />
          <Header.Content><Divider horizontal>Image Gallery</Divider></Header.Content>
        </Header>
          <Segment basic>
            <ImageGallery/>
          </Segment>   
        </Grid.Row>
      </Grid.Column>
      </Grid>
      </Grid.Row>

      <Grid.Row>
      <Grid columns={2} padded celled='internally'>
      <Grid.Column>
      <Segment basic padded fluid>
      <List divided horizontal size='small'>
            <List.Item>
              <List.Content>
                <UserAvatar/>
                {/* <Input transparent icon='search' placeholder='Search...' />  */}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Popup
                trigger={<BubbleSettingHeader/>}
                content={<BubbleSettings/>}
                on='click'
                basic
              />  
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Input transparent icon='search' placeholder='Search...' /> 
              </List.Content>
            </List.Item>
          </List>
          <Divider horizontal>POST</Divider>
   
      <div className = "PostArea">
        <PostForm></PostForm>
      </div>
      </Segment>
      </Grid.Column>
      <Grid.Column>
      <FileUpload/>
      </Grid.Column>
   
      </Grid>
      </Grid.Row>
  </div>
     
      </Window>
    );
  }
}

export default BubbleWindow;

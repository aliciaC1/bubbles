import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';
import { Grid, Image, Divider, Input, Icon,Popup, List, Segment, Header, Button} from 'semantic-ui-react';
import Feed from '../Feed';
import ImageGallery from '../ImageGallery';
import UserAvatar from '../UserAvatar';
import PostForm from '../PostForm';
import FormBubble from '../FormBubble';
import FileUpload from '../FileUpload';
import './BubbleWindow.css';


const style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: '2em',
}

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
        <TitleBar title='{Bubblename}'
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
            <Feed/>
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
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
              <Popup
                trigger={<Button icon='settings' content='Bubble Setting' />}
                content={<FormBubble/>}
                on='click'
                style={style}
                inverted
              />  
              </List.Content>
            </List.Item>
            <List.Item>
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

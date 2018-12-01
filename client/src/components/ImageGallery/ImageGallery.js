import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { Grid, Button, Header, Icon, Divider, Segment } from 'semantic-ui-react'
import ImageCard from '../ImageCard';


const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: 'auto',
  marginTop: 9,
  overflow: 'scroll', 
  height: 110,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 90,
  height: 90,
  padding: 2,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
}

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};



class ImageFeed extends Component {

  constructor() {
    super()
    this.state = {
      files: [],
    };
  }

  onDrop(files) {
    this.setState({
      files: files.map(file => ({
        ...file,
        preview: URL.createObjectURL(file)
      }))
    });
  }

  fileUploadHandler = () => {

    console.log(this.state.files[0])

    axios.post('/api/images/', { bubbleid: this.props.bubbleID, image: this.state.file }, {
      onUploadProgress: progressEvent => {
        console.log('Upload Progress : ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
      }
    })
      .then(res => {
        console.log(res);
      });
  }
  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks

    const { files } = this.state;
    if (files.length === 0) { return null } else {
      for (let i = files.length; i >= 0; i--) {
        const file = files[0];
        URL.revokeObjectURL(file.preview);
      }

    }

  }

  render() {

    const { files } = this.state;

    const thumbs = files.map(file => (
      <div style={thumb}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
          />
        </div>
      </div>
    ));

    return (
      <Grid.Row>
        <Header as='h2' icon textAlign='center'>
          <Icon name='image outline' circular />
          <Header.Content><Divider horizontal>Image Gallery</Divider></Header.Content>
        </Header>
        <Segment basic style={{overflow: 'scroll', height: '400px'}}>
          <Grid columns={3}>
            <Grid.Column>
              <ImageCard
                image = 'https://i.imgur.com/t7kHtLy.png'
                 />
            </Grid.Column>
            <Grid.Column>
            <ImageCard 
                image = 'https://i.imgur.com/wEY6VOy.png'/>
            </Grid.Column>
            <Grid.Column>
            <ImageCard 
                image = 'https://i.imgur.com/B01ExAt.png'/>
            </Grid.Column>
            <Grid.Column>
            <ImageCard 
                image = 'https://i.imgur.com/wzTFrVj.png'/>
            </Grid.Column>
            <Grid.Column>
            <ImageCard 
                image = 'https://i.imgur.com/XG0Em1m.png'/>
            </Grid.Column>
            <Grid.Column>     
            <ImageCard 
                image = 'https://i.imgur.com/YP0dKvE.png'/>
              </Grid.Column>
              <Grid.Column>     
            <ImageCard 
                image = 'https://i.imgur.com/vQbNjh9.png'/>
              </Grid.Column>
              <Grid.Column>     
            <ImageCard 
                image = 'https://i.imgur.com/OamhRub.png'/>
              </Grid.Column>
              <Grid.Column>     
            <ImageCard 
                image = 'https://i.imgur.com/5vdnZpy.png'/>
              </Grid.Column>
              <Grid.Column>     
            <ImageCard 
                image = 'https://i.imgur.com/fSktiWR.png'/>
              </Grid.Column>
              <Grid.Column>     
            <ImageCard 
                image = 'https://i.imgur.com/WOc9ZJ4.png'/>
              </Grid.Column>
              <Grid.Column>     
            <ImageCard 
                image = 'https://i.imgur.com/IP29RM9.png'/>
              </Grid.Column>
          </Grid>
        </Segment>
        <Grid.Row>
          <Divider horizontal>ADD MEDIA</Divider>
          
          <div className="AddImage" style={{marginBottom:'10px'}}>
            <section>
              <div className="dropzone"  >
                <Dropzone
                  text='add media'
                  accept="image/*"
                  onDrop={this.onDrop.bind(this)}
                  style ={{width:'459px', height:'30px'}}
                />
                <Button animated='vertical' basic color='black' icon onClick={this.fileUploadHandler} style={{ width: '100px' }}>
                  <Button.Content visible textAlign='center'><Icon name='upload' /></Button.Content>
                  <Button.Content hidden> UPLOAD </Button.Content>
                </Button>
              </div>
              <aside style={thumbsContainer} >
                {thumbs}
              </aside>
            </section>
          </div>
        </Grid.Row>
      </Grid.Row>
    );
  }

}



export default ImageFeed
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Icon } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };

  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
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

  
class FileUpload extends Component {
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
        const fd = new FormData();
        fd.append('image', this.state.files, this.state.files.name);
        axios.post('',fd, {onUploadProgress: progressEvent => {
            console.log('Upload Progress : ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
        }
        })
        .then(res => {
            console.log(res);
        });
    }
      componentWillUnmount() {
        // Make sure to revoke the data uris to avoid memory leaks
        const {files} = this.state;
        for (let i = files.length; i >= 0; i--) {
          const file = files[0];
          URL.revokeObjectURL(file.preview);
        }
      }
    
      render() {
        const {files} = this.state;
    
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

        //Change Dropzone to have 500 w by 100 h 
        return (
          <section>
            <div className="dropzone">
              <Dropzone
                accept="image/*"
                onDrop={this.onDrop.bind(this)}
              />
               <Button icon onClick = {this.fileUploadHandler}><Icon name ='upload'/></Button>
            </div>
            <aside style={thumbsContainer}>
              {thumbs}
            </aside>
          </section>
        );
      }
    }

export default FileUpload;

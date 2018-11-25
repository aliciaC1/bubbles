import React, { Component } from 'react';
import axios from 'axios';
import { Button, Icon } from 'semantic-ui-react';
class FileUpload extends Component {
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('',fd, {onUploadProgress: progressEvent => {
            console.log('Upload Progress : ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
        }
        })
        .then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <div className = "fileUpload">
            <input style= {{display: 'none'}} type ="file" onChange = {this.fileSelectedHandler}
            ref={fileInput => this.fileInput = fileInput}/>
            <Button icon onClick ={() => this.fileInput.click()}> <Icon name='attach' /> </Button>
            <Button icon onClick = {this.fileUploadHandler}><Icon name ='upload'/></Button>
            </div>
        );
    }
}

export default FileUpload;
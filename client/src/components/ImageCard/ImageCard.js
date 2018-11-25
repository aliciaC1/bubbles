

import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Input, Icon, Card,Label } from 'semantic-ui-react'
import FormBubble from '../FormBubble';

const src = 'https://www.sonomamag.com/wp-content/uploads/2018/05/shutterstock_352176329.jpg';
const extra = (
    <a>
        <Icon name='fire' />
        16 | 
        <Label as='a' basic color='blue'>
          Blue
        </Label>
    </a>
    )
class ImageCard extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <div className="ImageCard"  onClick={this.show('blurring')}>
             <Image src={src} size='massive' />    
        </div>
        <Modal dimmer={dimmer} open={open} onClose={this.close} basic size ='large'>
          <Modal.Content>
            <Card
                image='https://www.sonomamag.com/wp-content/uploads/2018/05/shutterstock_352176329.jpg'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default ImageCard

import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Input, Icon, Card,Label } from 'semantic-ui-react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';



const ImageCard = props => {
  console.log(props);
  return(
    <div className="ImageCard">
      <Image src={props.image} size='massive' />    
    </div>
  );
};

// const content = [
//   {
//     image: 'https://www.sonomamag.com/wp-content/uploads/2018/05/shutterstock_352176329.jpg', 
//     author: 'Jonas', 
//     avatar: '', 
//     date: '10.23.18', 
//     likes: '3'
//   }
// ]

// const src = 'https://www.sonomamag.com/wp-content/uploads/2018/05/shutterstock_352176329.jpg';
// const extra = 16
// class ImageCard extends Component {
//   constructor(props) {
//     this.state = { open: false };
//   }


//   show = dimmer => () => this.setState({ dimmer, open: true })
//   close = () => this.setState({ open: false })

//   render() {
//     const { open, dimmer } = this.state

//     return (
//       <div>
//         <div className="ImageCard"  onClick={this.show('blurring')}>
//              <Image src={this.props.image} size='massive' />    
//         </div>
//         <Modal dimmer={dimmer} open={open} onClose={this.close} basic size ='large' closeIcon>
//           <Modal.Content>

//             <Slider direction="vertical">
//     {content.map((item, index) => (
//       <div
//         key={index}
//         style={{ background: `url('${item.image}') no-repeat center center` }}
//       >
//         <div className="center">
//         <section>
//             <img src={item.avatar} alt={item.author} />
//             <span>
//            Posted by <strong>{item.author}</strong> <br/>
//             {item.date}
//             </span>
//           </section>
//           <section>
//           <Button as='div' labelPosition='right'>
//             <Button color='red'>
//               <Icon name='heart' />
//               Like
//             </Button>
//             <Label as='a' basic color='red' pointing='left'>
//               {item.likes}
//             </Label>
//             </Button>
//           </section>
//         </div>
//       </div>
//     ))}
// </Slider>
//           </Modal.Content>
//         </Modal>
//       </div>
//     )
//   }
// }

export default ImageCard

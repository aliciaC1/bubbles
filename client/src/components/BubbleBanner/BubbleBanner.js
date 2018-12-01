import React from 'react';
import { Image } from 'semantic-ui-react'
import banner from '../../assets/logoblack.png'
// import banner from '../../assets/banner1.png'

const BubblesBanner = () => (
  <div>
    <Image src={banner} style = {{width:'210px', height: 'auto', marginTop:'24px', marginBottom: '-16px'}} centered fluid />
  </div>
)

export default BubblesBanner;


// width: 208px;
//     height: auto;
//     font-size: .92857143rem;
//     margin-top: 24px;
//     margin-bottom: -25px;
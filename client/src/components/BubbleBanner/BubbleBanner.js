import React from 'react';
import { Image } from 'semantic-ui-react'
// import banner from '../../assets/BBLOGO.png'
import banner from '../../assets/banner1.png'

const BubblesBanner = () => (
  <div>
    <Image src={banner}  verticalAlign='top'fluid />
  </div>
)

export default BubblesBanner;
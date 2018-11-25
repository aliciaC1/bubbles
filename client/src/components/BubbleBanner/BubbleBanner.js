import React from 'react';
import { Image } from 'semantic-ui-react'

const src = './images/bubblesbanner.png'

const BubblesBanner = () => (
  <div>
    <Image src={src} size='tiny' verticalAlign='top'fluid />
  </div>
)

export default BubblesBanner;
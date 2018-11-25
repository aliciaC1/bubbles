import React from 'react';
import { Rnd } from "react-rnd";
import BubbleWindow from '../BubbleWindow';

const Box = () => (
    <div
      className="box"
      style={{ margin: 0, height: '100%', paddingBottom: '40px' }}
    >
    <BubbleWindow/>
    </div>
  );
  
  
  export default () => (
    <div
      style={{
        width: '800px',
        height: '400px',
      }}
    >
      <Rnd
        default={{
          x: 150,
          y: 205,
          width: 500,
          height: 190,
        }}
        minWidth={500}
        minHeight={190}
        bounds="window"
      >
        <Box />
      </Rnd>
    </div>
  );

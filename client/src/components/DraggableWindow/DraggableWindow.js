import React, {Component}from 'react';
import { Rnd } from "react-rnd";
import BubbleWindow from '../BubbleWindow';

  
const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };

class Box extends React.Component {
    constructor() {
      super();
      this.state = {
        width: 1450,
        height: 980,
        x: 10,
        y: 10
      };
    }

    render() {
        return (
          <Rnd
            style={style}
            size={{ width: this.state.width, height: this.state.height }}
            position={{ x: this.state.x, y: this.state.y }}
            onDragStop={(e, d) => {
              this.setState({ x: d.x, y: d.y });
            }}
            onResize={(e, direction, ref, delta, position) => {
              this.setState({
                width: ref.style.width,
                height: ref.style.height,
                ...position
              });
            }}
          >
            <BubbleWindow/>
          </Rnd>
        );
      }
    }

export default Box;

// const Box = () => (
//     // <div
//     //   className="box"
//     //   style={{ margin: 0, height: '100%', padding: '10px' }}
//     // >
//     <BubbleWindow/>
//     // </div>
//   );

// export default () => (
//     <div
//       style={{
//         width: '12200px',
//         height: '950px',
//       }}
//     >
//       <Rnd
//         default={{
//           x: 150,
//           y: 205,
//           width: 1200,
//           height: 950,
//         }}
//         minWidth={1200}
//         minHeight={950}
//         bounds="window"
//       >
//         <Box />
//       </Rnd>
//     </div>
//   );
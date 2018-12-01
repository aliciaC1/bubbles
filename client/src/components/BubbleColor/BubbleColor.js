//add color selector for groups 1 to five 
//on side nav Bar
//choose color 
// import React from 'react'
// import { ChromePicker } from 'react-color'

// class BubbleColorSelector extends React.Component {

//   render() {
//     return <ChromePicker />
//   }
// }

// export default BubbleColorSelector;


'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color'
import  Bubble from '../Bubble';

class BubbleColorSelector extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '142',
      g: '188',
      b: '229',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          borderRadius: '0px',
          boxShadow: '0 0 0 0px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'relative',
          zIndex: '2',
          marginLeft:'20px', 
        }
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },

    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <ChromePicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }

      </div>
    )
  }
}

export default BubbleColorSelector;
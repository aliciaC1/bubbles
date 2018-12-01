import React from 'react';
import { Button, Icon, Reveal } from 'semantic-ui-react';
import BubbleWindow from '../BubbleWindow';




class Bubble extends React.Component {

  
  constructor() {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  
  render() {
    return (
      <div>
        <Reveal animated='move down'>
          <Reveal.Content visible>
          <div className='circle' onClick={this.toggleHidden.bind(this)} name={this.props.name}></div>
          </Reveal.Content>
          <Reveal.Content hidden>
          <div className='circle2' onClick={this.toggleHidden.bind(this)} name={this.props.name}>
          <p><svg viewBox="0 0 500 500">
          <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
          <text width="500">
            <textPath xlink href="#curve">
              {this.props.name}
            </textPath>
          </text>
          </svg></p>
          </div>
          </Reveal.Content>
        </Reveal>
        {!this.state.isHidden && <BubbleWindow name={this.props.name} username={this.props.username} />}
      </div>
    )
  }
}

// const Window = () => (
//   <BubbleWindow />
// )

export default Bubble;
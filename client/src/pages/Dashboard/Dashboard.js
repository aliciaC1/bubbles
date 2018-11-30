import React from 'react'
import SideNav from '../../components/SideNav';
import BubblesBanner from '../../components/BubbleBanner';
import { Segment, Grid, Header } from 'semantic-ui-react';
import Bubble from '../../components/Bubble';
import API from "../../utils/API";
import BubbleColor from "../../components/BubbleColor";

class UserDashboard extends React.Component {

  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      avatar: ""
    }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = async () => {
    const data = await API.dashboardInfo();
    let { _bubbleId } = data.data;
    console.log(data.data)

    this.props.updateBubbles(_bubbleId)
    this.props.updateUserName(data.data.username)
  }


  render() {
    return (
      <div>
         <BubblesBanner />
         <br/>
         <div className="container">        
         <Grid>
         <Grid.Row >
          {/* <Grid.Column floated = 'left' width = {10}>
          </Grid.Column> */}
         <Grid.Column  width={16}>
            <SideNav bubbles={this.props.bubbles} updateBubbles={this.props.updateBubbles} username={this.props.username} />
         </Grid.Column>
         </Grid.Row>
         <Grid.Row>    
            <Grid.Column width={2}>
              <div className = 'colorPicker'>
                <Segment vertical>
                  <Header as='h2'> 
                    1 <BubbleColor/> 
                  </Header>
                </Segment>
                <Segment vertical>
                  <Header as='h2'> 
                    2 <BubbleColor/> 
                  </Header>
                </Segment>
                <Segment vertical>
                  <Header as='h2'> 
                    3 <BubbleColor/> 
                  </Header>
                </Segment>
              </div>
            </Grid.Column>
            <Grid.Column width={14}>       
            <br/>
            <div className = 'bubbleCanvas'>
              <Segment basic >
                {this.props.bubbles ? (
                  this.props.bubbles.map(bubble => (
                    <Bubble
                      id={bubble._ID}
                      name={bubble.name}
                      _userID={bubble._userID}
                      username={this.props.username}
                    />
                  ))) : null
                }
                <Bubble/>
                <Bubble/>
                <Bubble/>
                <Bubble/>
                <Bubble/>

              </Segment>
              </div>
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </div> 
      </div>
    );
  }
}

export default UserDashboard
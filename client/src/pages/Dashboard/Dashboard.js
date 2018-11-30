import React from 'react'
import SideNav from '../../components/SideNav';
import BubblesBanner from '../../components/BubbleBanner';
import { Segment, Grid } from 'semantic-ui-react';
import Bubble from '../../components/Bubble';
import API from "../../utils/API";
import axios from "axios"



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
    this.props.updateUserName(data.data.username)
    this.props.updateBubbles(_bubbleId)

  }









  render() {
    return (
      <div>
        <BubblesBanner />
        <div className="container">
          <Grid>
            <Grid.Column width={2}>
              <SideNav bubbles={this.props.bubbles} updateBubbles={this.props.updateBubbles} username={this.props.username} />

            </Grid.Column>
            <Grid.Column stretch width={14}>
              <Segment >

                {this.props.bubbles ? (
                  this.props.bubbles.map(bubble => (
                    <Bubble
                      id={bubble._id}
                      name={bubble.name}
                      users={bubble._userID}
                      username={this.props.username}
                      updatePost={this.props.updatePost}
                      posts={bubble.postId}


                    />

                  ))) : null
                }
                <Bubble />
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}


export default UserDashboard
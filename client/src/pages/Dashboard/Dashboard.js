import React from 'react'
import SideNav from '../../components/SideNav';
import BubblesBanner from '../../components/BubbleBanner';
import { Segment,Grid } from 'semantic-ui-react';
import API from "../../utils/API";


const UserDashboard = () => {
  return (
    <div>
       <BubblesBanner/>
      <div className = "container">
        <Grid>
          <Grid.Column width ={4}>
            <SideNav/>  
          </Grid.Column>
          <Grid.Column stretch width = {12}>
            <Segment basic>
              {/* <BubbleCanvas/> */}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};


export default UserDashboard
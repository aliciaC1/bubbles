import React from 'react'
import SideNav from '../../components/SideNav';
import BubblesBanner from '../../components/BubbleBanner';
import BubbleCanvas from '../../components/BubbleCanvas'
import { Segment,Grid } from 'semantic-ui-react';
import Bubble from '../../components/Bubble';
import API from "../../utils/API";
import { set } from 'mongoose';
import { throws } from 'assert';


class UserDashboard extends React.Component {

  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      bubbles: [],
      avatar:""
    }
  }



  componentDidMount() {
    this.loadData()
  
}

getbubble =   (newBubble) => {

  this.setState({bubbles: this.state.bubbles.push(newBubble)})

}

  loadData = async() =>{

 const data = await API.dashboardInfo();
 
 this.setState({
  bubbles: [...data.data._bubbleId]
})

      console.log(this.state.bubbles)
  }
    

  render() {

  return (
    <div>
       <BubblesBanner/>
      <div className = "container">
        <Grid>
          <Grid.Column width ={2}>
            <SideNav fromParent = {this.getbubble}/>
            
           
          </Grid.Column>
          <Grid.Column stretch width = {14}>
            <Segment >

            {this.state.bubbles.map((bubbles, i=0) => (
             <Bubble/>
        
           ))}
              
                
              <Bubble/>  
         
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
}


export default UserDashboard
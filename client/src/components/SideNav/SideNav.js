import React, { Component } from 'react'
import { Menu, Icon, Header, Segment } from 'semantic-ui-react'
import UserAvatar from '../UserAvatar';
import UserSettings from '../UserSettings';
import AddBubbleModal from '../AddBubbleModal';
import BubbleColor from '../BubbleColor';
import API from '../../utils/API'
import Bubble from '../Bubble';
import Dashboard from '../../pages/Dashboard/Dashboard'
import querystring from 'querystring'

export default class MenuExampleVerticalSecondary extends Component {

  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      activeItem: 'user' , username:'', userimage:''
    }
  }


  componentDidMount() {
    this.loadData();
}

  loadData = async () => {
   const user = await API.dashboardInfo();

   this.setState({username: user.data.username})
   if(user && user.data.image) {
     this.setState({ userimage: user.data.image })
   }
  }

  change = (event) => {
    if (event.target.files && event.target.files[0]) {
      const a = this;
      const reader = new FileReader();

      reader.onload = async function (e) {
        a.setState({ userimage: e.target.result });
        const data = querystring.stringify({
          "image": e.target.result
        });
        const post = await API.postPhoto(data);
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick}>
        <input onChange={this.change} type="file" id="userimage" name="userimage" accept="image/png, image/jpeg"></input>
        <UserAvatar username = {this.state.username} userimage={this.state.userimage}/>
        <label for="userimage">    Update Avatar </label>

        </Menu.Item>
       <Menu.Item
          name='addBubble'
          active={activeItem === 'addBubble'}
          onClick={this.handleItemClick}
        > <AddBubbleModal/>
        </Menu.Item>
        <Menu.Item
          name='1'
          active={activeItem === '1'}
          onClick={this.handleItemClick}
        >
          <Segment basic>
            <Header as='h2' floated='left'>
              1
            </Header>
            <Header as='h2' floated='right'>
              <BubbleColor/>
            </Header>
          </Segment>
        </Menu.Item>
        <Menu.Item
          name='2'
          active={activeItem === '2'}
          onClick={this.handleItemClick}
        >
          <Segment basic>
            <Header as='h2' floated='left'>
              2
            </Header>
            <Header as='h2' floated='right'>
              <BubbleColor/>
            </Header>
          </Segment>
        </Menu.Item>
           <Menu.Item
          name='3'
          active={activeItem === '3'}
          onClick={this.handleItemClick}
        >
          <Segment basic>
            <Header as='h2' floated='left'>
              3
            </Header>
            <Header as='h2' floated='right'>
              <BubbleColor/>
            </Header>
          </Segment>
        </Menu.Item>
        <Menu.Item/>
        <Menu.Item
          name='settings'
          active={activeItem === 'settings'}
          onClick={this.handleItemClick}
        >
          <UserSettings/>
        </Menu.Item>
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
        >
          <Header as='h4'>
            <Icon name='ban'/>
            <Header.Content href = '/logout' >Logout</Header.Content>
          </Header>
        </Menu.Item>
      </Menu>
    )
  }
}



{/* <Header as='h2'>
<BubbleColor/>
<Header.Content>3</Header.Content>
</Header>  */}

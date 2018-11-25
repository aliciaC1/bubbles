import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';
import { Grid, Image, Divider, Input, Icon,Popup, List} from 'semantic-ui-react';
import Feed from '../Feed';
import ImageGallery from '../ImageGallery';
import BubbleSettings from '../BubbleSettings';
import UserAvatar from '../UserAvatar';
import BubbleSettingHeader from '../BubbleSettingHeader';
import './BubbleWindow.css';

class BubbleWindow extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  render() {
    return (

      <Window
        color={this.props.color}
        theme={this.props.theme}
        chrome
        height="600px"
        width = "1000px"
        padding="20px"
      >
        <TitleBar title="Coolest Bubble" 
          controls
          // isMaximized={this.state.isMaximized}
          theme={this.props.theme}
          background={this.props.color}
          onCloseClick={this.close}
          onMinimizeClick={this.minimize}
          onMaximizeClick={this.toggleMaximize}
          onRestoreDownClick={this.toggleMaximize}
          />
      <div>
    <Grid columns={2} padded celled='internally'>
      <Grid.Column textAlign="center">
        <Grid.Row >
        <div>
        <UserAvatar/>
        </div>
        </Grid.Row>
        <List divided horizontal size='small'>
            <List.Item>
              <List.Content>
                <Popup
                trigger={<BubbleSettingHeader/>}
                content={<BubbleSettings/>}
                basic
              />  
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Input transparent icon='search' placeholder='Search...' /> 
              </List.Content>
            </List.Item>
          </List>
            <Divider fitted />
        <Grid.Row>
          <ImageGallery/>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column>
      <h3>Activity Feed </h3>
        <Grid.Column width={2}>
        {/* <Text color={this.props.theme === 'dark' ? 'white' : '#333'}> Poops  </Text> */}
        </Grid.Column>
        <Grid.Column width={6}>
            <Feed/>
        </Grid.Column>
      </Grid.Column>
    </Grid>
  </div>
     
      </Window>
    );
  }
}

export default BubbleWindow;
// import React from 'react';
// import Rnd from 'react-rnd';
// import { Window, TitleBar, Text } from 'react-desktop/windows';

// const Box = () => (
//   <div
//     className="box"
//     style={{ margin: 0, height: '100%', paddingBottom: '40px' }}
//   >
//      <Window
//         color={this.props.color}
//         theme={this.props.theme}
//         chrome
//         height="300px"
//         padding="12px"
//       >
//         <TitleBar title="My Windows Application" 
//           controls
//           // isMaximized={this.state.isMaximized}
//           theme={this.props.theme}
//           background={this.props.color}
//           onCloseClick={this.close}
//           onMinimizeClick={this.minimize}
//           onMaximizeClick={this.toggleMaximize}
//           onRestoreDownClick={this.toggleMaximize}
//           />
//         <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>
//         </Text>
//       </Window>
//   </div>
// );


// export default () => (
//   <div
//     style={{
//       width: '800px',
//       height: '400px',
//     }}
//   >
//     <Rnd
//       default={{
//         x: 150,
//         y: 205,
//         width: 500,
//         height: 190,
//       }}
//       minWidth={500}
//       minHeight={190}
//       bounds="window"
//     >
//       <Box />
//     </Rnd>
//   </div>
// );

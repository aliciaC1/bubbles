import React from 'react';
import {Header, Icon,Segment,Divider} from 'semantic-ui-react';
import FormBubble from '../FormBubble';


const BubbleSettings = () => (
    <Segment> 
        <FormBubble/>
    <Divider horizontal/>
        <Header as='h2' icon>
            <Icon name='add user'/>
            Invite more Members
            <Header.Subheader>Magic link to invite other members: </Header.Subheader>
    </Header>
    </Segment>
);

export default BubbleSettings;
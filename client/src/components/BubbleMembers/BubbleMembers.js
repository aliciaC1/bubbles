import React from 'react'
import { Image, List } from 'semantic-ui-react'


const BubbleMembers = props => (
    <List.Item>
        <Image avatar src={props.avatar} />
        <List.Content> {props.member}
        </List.Content>
    </List.Item>
)

export default BubbleMembers



import React from 'react';
import { List, ListItem} from 'material-ui';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
export default class ChatList extends React.Component{
    state = {
        chats: [{ chatName: 'chat1', icon: 'red' },
                { chatName: 'chat2', icon: 'green'},
                { chatName: 'chat3', icon: 'blue' }]
    }
    render() {
        const chatElements = this.state.chats.map((chat, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={ chat.chatName} />
                    </ListItem>
        ));
        return (
            <div className="chatList">
                {chatElements}
            </div>
        );
    }
}
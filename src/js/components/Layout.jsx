import React from 'react';
import ChatList from './ChatList';
import Header from './Header'
import MessageField from './MessageField'

export default class Layout extends React.Component{
  
    render() {
        return (
            <div className="layout">
                 <Header />
                 <ChatList />
                 <MessageField/> 
            </div>
        );
    }
}
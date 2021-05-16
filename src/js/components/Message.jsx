import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component{
    static propTypes = {
        text: PropTypes.string.isRequired,
        sender:PropTypes.string.isRequired
    };

    render() {
        let sendersPosition = (this.props.sender != 'bot') ? "right" : "left"
        let sendersMargin = (this.props.sender != 'bot') ? "5px 10px 5px 0" : "5px 0 5px 10px"
        
        return (
            <div className="message"
            style={ { alignSelf: this.props.sender === 'bot' ?
                   'flex-start' : 'flex-end' } }
                >
                <div className="message-sender">{this.props.sender}</div>
                <div>{this.props.text}</div>
            </div>
        )
    }
}
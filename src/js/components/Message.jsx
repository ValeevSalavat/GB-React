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
        
        // console.log(time);
        let messageStyle = {
            display: "flex",
            flexDirection: "column",
            textAlign: sendersPosition,
            // border: "1px solid blue",
            borderRadius: "10px",
            margin:"5px 50px 5px 50px",
            backgroundColor: "#008080"
        }
        let textStyle = {
            margin: sendersMargin,
            fontSize: "20px"
        }
        let senderStyle = {
            margin: sendersMargin,
            fontWeight: "200",
        }
        return (
            <div style={messageStyle}>
                <div style={senderStyle}>{this.props.sender}</div>
                <div style={ textStyle}>{this.props.text}</div>
            </div>
        )
    }
}
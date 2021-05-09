import React from 'react';
import Message from './Message'

export default class MessageField extends React.Component {
    state = {
        messages: [{ sender: 'bot', text: "Hello!" }, {sender:'bot',text:"Go!"}],
        currentMessage:""
    };

    handleClick = () => {
        this.setState({ messages: [...this.state.messages, { text: this.state.currentMessage,sender:'user' }] });
    };
    messageHandle = (event) => {
        this.setState({currentMessage:event.target.value});
    };
    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender === 'user') {
            setTimeout(() =>
                this.setState({
                    messages: [...this.state.messages, {text:'Okay,brooooo',sender:'bot'}]
                }),1000
            );
        }
    }

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender}/>
        ));

        let textStyle = {
            margin: "0 auto",
            textAlign: "center",
            fontWeight: "bold",
            border: "2px solid #008080",
            maxWidth: "700px"
                
        };
        let inputStyle = {
            borderRadius: "10px"
        };
        let buttonStyle = {
            borderRadius: "50%"
        };
        let formStyle = {
            margin:"25px 0 10px 0"
        };
    return (
        <div style={textStyle}>
            <h1>Bot Chat</h1>
            {messageElements}
            <div style={formStyle}>
                <input value={this.state.currentMessage} onChange={this.messageHandle} type="text" style={inputStyle}/>
                <button onClick={this.handleClick} style={buttonStyle}>{'>'}</button>
            </div>
        </div>
    );
    }
}
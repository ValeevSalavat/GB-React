import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message'

export default class MessageField extends React.Component {
    constructor(props) {
       super(props);
       // создадим ref в поле `textInput` для хранения DOM-элемента
       this.textInput = React.createRef();
   }
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

    return (
        <div className="messageField">
            <h1>Bot Chat</h1>
                {messageElements}
            <div>
                <div style={ { width: '100%', display: 'flex' } }>
                    <TextField
                        name="input"
                        fullWidth={ true }
                        hintText="Enter message"
                        style={ { fontSize: '22px',fontFamily: 'Raleway-Medium, sans-serif' } }
                        onChange={ this.messageHandle }
                        value={ this.state.currentMessage }
                        // onKeyUp={ (event) => this.handleKeyUp(event, this.state.currentMessage) }
                    />
                    <FloatingActionButton onClick={this.handleClick}>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        </div>
    );
    }
}
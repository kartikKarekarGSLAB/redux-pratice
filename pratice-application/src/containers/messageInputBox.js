import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayController from './../components/displayController/displayController';
import MessageDisplay from './../components/messageDisplay/messageDisplay';
import { addMessage } from './../actions/addMessageAction';

class MessageInputBox extends Component {
    render() {
        return (<div>
            <h1> { this.props.message } </h1>
            <MessageDisplay 
            onClick={this.props.changeMessage('this is my demo !!!')}
            />
            <DisplayController />
            <button> Chnage Message </button>
        </div>);
    }
}

function mapStateToProps(state) {
    console.log('inside mapStateToProps : ',state);
    return {
        message : state.reducerMessage.displayMessage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeMessage : (message) => dispatch(addMessage(message))
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(MessageInputBox);
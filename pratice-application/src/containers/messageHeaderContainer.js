import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageHeader from './../components/MessageHeader';
import { addMessage } from './../actions/addMessageAction';

function mapStateToProps(state) {
    return {
        message : 'FINAL DEMO'
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeMessage : (message) => dispatch(addMessage(message))
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(MessageHeader);
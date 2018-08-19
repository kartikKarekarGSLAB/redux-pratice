import React from 'react'
import MessageDisplay from './messageDisplay/messageDisplay';

const MessageHeader = ({ message , changeMessage }) => {
  console.log('************************** : ',message);
  var data = 'DattaGuru';
  return (
  <div>  
  <h1>{message}</h1>
  <MessageDisplay
        onClick={(data) => changeMessage(data)}
      />
  </div>)
}

export default MessageHeader;
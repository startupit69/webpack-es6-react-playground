import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';
import firebaseConfig from '../firebase.config.js'

var {Card, List} = mui;

class MessageList extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: {}
    };

    this.firebaseRef = new Firebase(firebaseConfig.firebaseURL);

    this.firebaseRef.on("child_added", (msg)=> {
      if (this.state.messages[msg.key()]) {
        return;
      }

      let msgVal = msg.val();
      msgVal.key = msg.key();
      this.state.messages[msgVal.key] = msgVal;
      this.setState({messages: this.state.messages});
    });

    this.firebaseRef.on("child_removed", (msg)=> {
      var key = msg.key();
      delete this.state.messages[key];
      this.setState({messages: this.state.messages});
    });
  }

  render () {
    //debugger;
    var messageNodes = _.values(this.state.messages).map((message) => {
      return(
        <Message message={message.message}/>
      );
    });

    return (
      <Card style={{
        flexGrow: 2,
        marginLeft: 30
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );

  }

}

export default MessageList;

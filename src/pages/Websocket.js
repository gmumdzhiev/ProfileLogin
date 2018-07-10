import React, { Component } from 'react';
//import './App.css';
import { connect } from 'react-redux'
import { send } from '../store/websocket'
import SendMessageForm from '../components/SendMessageForm';

class Websocket extends Component {
  constructor() {
    super()
    this.state = { input: '' }
  }

  render() {
    const {
      input,
    } = this.state

    const {
      messages,
      dispatch,
      disconnected,
      name,
      //channel1,
      user,

    } = this.props

    return (
      <div className="App">
        <div>
          <h1>Websocket example</h1>
          <p>
            You will communicate with the backend by sending commands to them.
            For now, the only command that's working is <code>echo</code>,
                  which will simply return the payload. You can send data to the websocket
                  using the form below.
          </p>

          <p>An example of a call would be to send:</p>

        </div>
        <SendMessageForm user="olmo" />

        <div>
          <p>Websocket activity:</p>
          <ul>
            {messages.map(this.renderMessage)}
          </ul>
        </div>
      </div>
    );
  }

  renderMessage(message, idx) {
    return (
      <li key={idx}>
        <pre>{message}</pre>
      </li>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.connection.name,
  users: state.connection.users,
  messages: state.messages.log,
  //channels: state.channels.channels,
  disconnected: !state.websocket.connected,
})

export default connect(mapStateToProps)(Websocket);
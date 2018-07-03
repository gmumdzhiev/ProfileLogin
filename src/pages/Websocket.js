import React, { Component } from 'react';
//import './App.css';
import { connect } from 'react-redux'
import { send } from '../store/websocket'

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
      id,
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
          <ul>
            <li><code>{'{'}"command": "echo", "payload": "test"{'}'}</code></li>
            <li><code>{'{'}"command": "name", "name": "olmo"{'}'}</code></li>
            <li><code>{'{'}"command": "message", "user": "olmo", "message": "hello"{'}'}</code></li>
          </ul>
        </div>
        <div>
          {'ID:' + id + 'Name:' + name}
          Send message:
          <textarea
            value={input}
            onChange={(e) => this.setState({ input: e.target.value })}>
          </textarea>

          <button onClick={() => { dispatch({ type: send, payload: input }) }}
            disabled={disconnected}>
            send
          </button>
        </div>
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
  //name: state.connection.name,
  //id: state.connection.id,
  messages: state.messages.log,
  disconnected: !state.websocket.connected,
})

export default connect(mapStateToProps)(Websocket);
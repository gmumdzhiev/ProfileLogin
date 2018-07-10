import React, { Component } from 'react';
//import './App.css';
import { connect } from 'react-redux'
import { send } from '../store/websocket'

class SendMessageForm extends Component {
  constructor() {
    super()
    this.state = { input: '' }
  }

  render() {
    const {
      input,
    } = this.state

    const {
      dispatch,
      ...otherProps,
    } = this.props

    // this.props is { user:"olmo" } or { channel: "#test" }

    return (
      <div>
        <p>Input your message:</p>
        <textarea
          value={input}
          onChange={(e) => this.setState({ input: e.target.value })}>
        </textarea>

        <button onClick={() => {
          dispatch({
            type: send,
            payload: {
              "command": "message",
              "message": input,
              ...otherProps
            },
          })
        }}>
          send
          </button>
      </div>
    )
  }
}

export default connect()(SendMessageForm)

import React from 'react'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'
import iuser from '../img/user.png'
const LoginPage = ({ dispatch }) => (
  <div>
    {iuser}
    <h1>Login:</h1>
    <LoginForm onLogin={() => dispatch(push('/websocket'))} />

  </div>
)

export default connect()(LoginPage)

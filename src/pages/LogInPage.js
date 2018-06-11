import React from 'react'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

const LoginPage = ({ dispatch }) => (
  <div>
    <h1>Login</h1>
    <LoginForm onLogin={() => dispatch(push('/chat'))} />

  </div>
)

export default connect()(LoginPage)

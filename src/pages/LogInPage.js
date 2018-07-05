import React from 'react'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import userIcon from '../img/user.png'

const LoginPage = ({ dispatch }) => (
  <div>
    <h1> Give us your username: <img src={userIcon} alt='user.icon' /></h1>

    <LoginForm />

  </div >
)

export default connect()(LoginPage)
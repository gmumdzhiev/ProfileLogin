import React from 'react'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'

import userIcon from '../img/user.png'
import logo from '../img/bear.svg'

const LoginPage = ({ dispatch }) => (
  <div>
    <img id='logo1' src={logo} alt='bear.icon' />

    <h1>Welcome to PandaText</h1>
    <p> Fill in your username: <img src={userIcon} alt='user.icon' /></p>

    <LoginForm />
  </div >
)

export default connect()(LoginPage)
import React from 'react'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'

import userIcon from '../img/user.png'
//import logo from '../img/bear.svg'

const LoginPage = ({ dispatch }) => (

  <div id='login'
    style={{
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',

      //<img id='logo1' src={logo} alt='bear.icon' />
    }}>

    <h1 style={{
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',

    }}>Welcome to PandaText</h1>
    <img id='user' src={userIcon} alt='user.icon' />
    <p
      style={{
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',

      }}> Fill in your username: </p>

    <LoginForm />
  </div >
)

export default connect()(LoginPage)
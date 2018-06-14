import React from 'react'
import Link from './Link'
import logo from '../img/bear.svg'
import chat from '../img/if_chat-70px_510868.svg'
const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    {' '}
    <Link to="/about">About</Link>
    {' '}
    <Link to="/contact">Contact</Link>
    {' '}
    <img id='logo' src={logo} alt='bear.icon' />
    <img id='chat' src={chat} alt='chat.icon' />
    <div id='LogReg'>
      <Link to="/login">Login</Link>
      {' '}

    </div>
  </nav>
)
export default Navigation
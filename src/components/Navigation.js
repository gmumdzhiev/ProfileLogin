import React from 'react'
import Link from './Link'
const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    {' '}
    <Link to="/about">About</Link>
    {' '}
    <Link to="/contact">Contact</Link>
    {' '}
    <div id='LogReg'>
      <Link to="/LoginForm">Login</Link>
      {' '}
      <Link to="/RegisterForm">Register</Link>
    </div>
  </nav>
)
export default Navigation
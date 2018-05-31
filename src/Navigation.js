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
    <Link to="/error">Error</Link>
  </nav>
)
export default Navigation
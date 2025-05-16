import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
    <nav>
      <ul>
        <li><Link to="/">Registration</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Home">Home</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'
//import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/programs">Full List</NavLink>
    </nav>
  )
}

export default NavBar;
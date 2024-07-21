import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
       <div className="nav">
        <h1 className="logo">Bill Manager</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
        </div>
    </div>
  )
}

export default Navbar

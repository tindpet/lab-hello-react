import React from 'react'
import ironhackLogo from "../images/ironhack-logo-xs.png"; 
import topMenu from "../images/menu-top-xs.png"; 


function Navbar() {
  return (
    <div className="navbar">
      <img src={ironhackLogo} alt="logo" />
  
      <img src={topMenu} alt="topmenu" />
    </div>

  )
}

export default Navbar

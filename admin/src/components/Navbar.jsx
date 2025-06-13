import React from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div>
      <img src={assets.clothsyLogo} alt="" />
      <button>Logout</button>
    </div>
  )
}

export default Navbar

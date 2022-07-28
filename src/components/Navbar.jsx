import React from 'react'
import { BsSearch } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='search-input'>
        <input className='input' type="text" placeholder="What do you want to learn?" />
        <span className='icon-span'>
        <BsSearch className='search-icon' /> 
        </span>
      </div>
      <div className='btn-container'>
        <button className='login-btn'>Login</button>
        <div className='join-wrapper'>
        <button className='join-btn'>Join For Free</button>
        <BsArrowRightShort className='arrow-icon'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

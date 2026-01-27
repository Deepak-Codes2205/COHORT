import React from 'react'
import "../../index.css";

const Nav = () => {
  return (
    <div className='Navbar'>
        <div className='Left-nav'>
            <i class="ri-user-fill"></i>
            <h3 className='h3'>About Me</h3>
            <h3 className='h3'>Profile</h3>
            <h3 className='h3'>Services</h3>
            <h3 className='h3'>Blog</h3>
        </div>
        <div className='Right-nav'>
            <a>Book a call<i class="ri-arrow-right-up-long-line"></i> </a>
        </div>
    </div>
  )
}

export default Nav

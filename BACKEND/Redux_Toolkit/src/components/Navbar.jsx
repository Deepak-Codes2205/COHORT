import React from 'react'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const thm = useSelector( (state)=>state.theme.value )
  return (
    <div className='navbar'>
      <div className= 'left-nav'>
        <h1>INCREMENTOR/DECREMENTOR</h1>
      </div>
      <div className='right-nav'>
        <button>Light</button>
        <button>Dark</button>
      </div>
    </div>
  )
}

export default Navbar

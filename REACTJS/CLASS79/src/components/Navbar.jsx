import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-pink-400 font-semibold'>
        <h2 className='text-3xl'>Navbar</h2>
        <input className='border-2 px-10 py-2 rounded-sm' type="text" />
        <div className='flex justify-between bg-yellow-400 px-8 py-4 gap-10'>
            <Link to='/Home'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Package'>Package</Link> 
            <Link to='/Courses'>Courses</Link> 
        </div>
      </div>
  )
}

export default Navbar

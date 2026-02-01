import React from 'react'

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='bg-gray-900 w-screen h-screen'>
      <h1 className='text-5xl font-semibold text-white absolute top-[20%] left-1/2 -translate-x-1/2 '>About page</h1>
      <Link to='/About/Men'>Men's</Link>
      <Link to='/About/Women'>Women's</Link>
    </div>
  )
}
export default About

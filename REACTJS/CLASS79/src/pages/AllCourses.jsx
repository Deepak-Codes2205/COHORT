import React from 'react'
import { useParams } from 'react-router-dom'
 

const AllCourses = () => {
    const params = useParams()

    {/*params is the string whatever you typed after http://localhost:5173/Courses/fdf  i.e "fdf" check it on console */}
    console.log(params)
    console.log(params.id)

  return (
    <div className='bg-gray-900 w-screen h-screen'>
      <h1 className='text-5xl font-semibold text-white absolute top-[20%] left-1/2 -translate-x-1/2 flex-nowrap'>{params.id} and All Available Courses</h1>
    </div>
  )
}

export default AllCourses

import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Package from './pages/Package'
import Navbar from './components/Navbar'
import Women from './pages/Women'
import Men from './pages/Men'
import Random from './pages/Random'
import Courses from './pages/Courses'
import Cohort from './pages/Cohort'
import AllCourses from './pages/AllCourses'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div className='bg-gray-900 w-screen h-screen'>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Package' element={<Package />} />
        <Route path='/Courses' element={<Courses />} />

        {/* NESTED ROUTE */}
        <Route path='/About/Men' element={<Men />} />
        <Route path='/About/Women' element={<Women />} />
        <Route path='/Courses/Cohort' element={<Cohort />} />

        {/* DYNAMIC ROUTE */}
        <Route path='/Package/:id' element={<Random />} />
        <Route path='/Courses/:id' element={<AllCourses />} />

        {/* NESTED DYNAMIC ROUTES */}
        <Route path='/Courses/:id/detail' element={<CourseDetail />} />


        {/* NOT FOUND PAGE  */}
        <Route path='/*' element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App

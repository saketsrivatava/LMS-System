import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from './CourseCard';
import {AppContext} from '../../context/AppContext.jsx'

const CoursesSection = () => {
  const {allCourses} = useContext(AppContext);
  return (
    <div className='py-16 md:px-40 px-8 text-center'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3 mb-5'>Discover out top-rated courses across various categories.
        From coding and design to <br/> business and wellness, our courses are crafted to deliver results.
      </p>
      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourses.slice(0,4).map((course,index)=><CourseCard key={index} course={course}/>)}
      </div>
      <Link to={'/course-list'} onClick={()=> scrollTo(0,0)}
      className='text-gray-500 border border-gray-500/30 px-10 py-3  rounded'>Show all courses</Link>
    </div>
  )
}

export default CoursesSection

//It's used instead of <a> to navigate within a React SPA (Single Page Application).
//It prevents full page reload and enables client-side routing.
//The onClick handler scrolls the page to the top when the link is clicked.
//The scrollTo(0,0) function scrolls the window to the top-left corner of the page.
import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext.jsx';
import { Link } from 'react-router-dom';
import 'styled-jsx/css';


const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);
  
  return (
    <Link 
      to={'/course/' + course._id} 
      onClick={() => scrollTo(0, 0)}
      className='group block border border-gray-200 bg-white rounded-xl overflow-hidden 
                 shadow-sm hover:shadow-xl transition-all duration-300 ease-out
                 transform hover:-translate-y-2 hover:scale-[1.02]
                 relative before:absolute before:inset-0 before:bg-gradient-to-br 
                 before:from-transparent before:to-blue-50/20 before:opacity-0 
                 before:hover:opacity-100 before:transition-opacity before:duration-300'
    >
      {/* Image Container with Overlay Effect */}
      <div className='relative overflow-hidden'>
        <img 
          className='w-full h-48 object-cover transition-transform duration-500 
                     group-hover:scale-110 group-hover:brightness-110' 
          src={course.courseThumbnail} 
          alt={course.courseTitle} 
        />
        
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        
        {/* Floating Play Button */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                         group-hover:translate-y-0'>
          <div className='w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full 
                          flex items-center justify-center shadow-lg
                          hover:bg-white hover:scale-110 transition-all duration-200'>
            <div className='w-0 h-0 border-l-[12px] border-l-blue-600 
                            border-t-[8px] border-t-transparent 
                            border-b-[8px] border-b-transparent ml-1'></div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className='p-4 space-y-3'>
        {/* Title with Hover Effect */}
        <h3 className='text-lg font-semibold text-gray-900 line-clamp-2 
                       group-hover:text-blue-600 transition-colors duration-200
                       transform group-hover:translate-x-1'>
          {course.courseTitle}
        </h3>
        
        {/* Educator Name */}
        <p className='text-gray-600 text-sm font-medium 
                      group-hover:text-gray-700 transition-colors duration-200'>
          {course.educator?.name || "Unknown Educator"}
        </p>
        
        {/* Rating Section */}
        <div className='flex items-center space-x-3'>
          <span className='font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-md text-sm
                           transform group-hover:scale-105 transition-transform duration-200'>
            {calculateRating(course)}
          </span>
          
          {/* Animated Stars */}
          <div className='flex space-x-0.5'>
            {[...Array(5)].map((_, i) => (
              <img 
                src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} 
                alt='' 
                key={i}
                className='w-4 h-4 transform transition-all duration-200 
                           group-hover:scale-110 opacity-80 group-hover:opacity-100'
                style={{
                  transitionDelay: `${i * 50}ms`
                }}
              />
            ))}
          </div>
          
          {/* Review Count */}
          <span className='text-gray-500 text-sm'>
            ({course.courseRatings.length})
          </span>
        </div>
        
        {/* Price Section */}
        <div className='flex items-center justify-between pt-2 border-t border-gray-100'>
          <div className='space-y-1'>
            <p className='text-xl font-bold text-gray-900 
                          group-hover:text-blue-600 transition-colors duration-200
                          transform group-hover:scale-105'>
              {currency}{(course.coursePrice - course.discount * course.coursePrice/100).toFixed(2)}
            </p>
            
            {/* Show original price if there's a discount */}
            {course.discount > 0 && (
              <div className='flex items-center space-x-2'>
                <span className='text-sm text-gray-400 line-through'>
                  {currency}{course.coursePrice.toFixed(2)}
                </span>
                <span className='text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium
                                 animate-pulse group-hover:animate-none'>
                  {course.discount}% OFF
                </span>
              </div>
            )}
          </div>
          
          {/* Arrow Icon */}
          <div className='w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center
                          group-hover:bg-blue-100 transition-all duration-200
                          transform group-hover:translate-x-1 group-hover:scale-110'>
            <svg className='w-4 h-4 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Shimmer Effect on Hover */}
      <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full 
                      bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      transition-transform duration-1000 ease-out pointer-events-none'></div>
    </Link>
  );
};

export default CourseCard;
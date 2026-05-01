import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'


const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Empower your future with the courses designed to <span className='text-blue-600'>
        fit your choice.</span><img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>

        <p className='md:block hidden text-gray-500 max-w-2xl pt-5 mx-auto pb-10'>We bring together world-class instructors, ineteractive content, and a supportive community to help you achieve your personal and professional goals.</p>

        <p className='md:hidden text-gray-500 max-w-sm mx-auto pb-10'>We bring together world-class instructors to help you achieve your professional goals.</p>
        <SearchBar/>
    </div>
  )
}

export default Hero
// import React, { useEffect, useState } from 'react';
// import { assets } from '../../assets/assets';
// import SearchBar from './SearchBar';

// const Hero = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     // Trigger animations on mount
//     setIsVisible(true);
//   }, []);

//   // Handle mouse movement for parallax effect
//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: (e.clientX - rect.left - rect.width / 2) / 20,
//       y: (e.clientY - rect.top - rect.height / 2) / 20,
//     });
//   };

//   return (
//     <div 
//       className="relative flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 
//                  text-center bg-gradient-to-b from-cyan-100/70 via-cyan-50/50 to-white 
//                  overflow-hidden min-h-[70vh] md:min-h-[80vh]"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Floating Circles */}
//         <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full 
//                         animate-float-slow blur-xl"></div>
//         <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200/40 rounded-full 
//                         animate-float-medium blur-lg"></div>
//         <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-100/20 rounded-full 
//                         animate-float-fast blur-2xl"></div>
        
//         {/* Gradient Orbs */}
//         <div className="absolute top-1/3 right-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 
//                         rounded-full animate-pulse-slow blur-md"></div>
//         <div className="absolute bottom-1/3 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 
//                         rounded-full animate-pulse-medium blur-lg"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 space-y-8 max-w-6xl mx-auto">
        
//         {/* Main Heading with Staggered Animation */}
//         <div className="relative">
//           <h1 className={`md:text-home-heading-large text-home-heading-small font-bold text-gray-800 
//                           max-w-3xl mx-auto leading-tight
//                           transform transition-all duration-1000 ease-out
//                           ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
//               style={{
//                 transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
//               }}>
//             <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
//               Empower your future with the courses designed to
//             </span>
//             <br />
//             <span className="relative inline-block text-blue-600 animate-fade-in-up" 
//                   style={{ animationDelay: '0.4s' }}>
//               fit your choice.
              
//               {/* Animated Underline */}
//               <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 
//                                transform scale-x-0 origin-left transition-transform duration-700 delay-1000
//                                animate-scale-x"></span>
//             </span>
            
//             {/* Sketch with Animation */}
//             <img 
//               src={assets.sketch} 
//               alt="sketch" 
//               className={`md:block hidden absolute -bottom-7 right-0 
//                           transform transition-all duration-700 ease-out
//                           ${isVisible ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-4 opacity-0 rotate-12'}`}
//               style={{
//                 animationDelay: '0.8s',
//                 transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(${mousePosition.x * 0.1}deg)`,
//               }}
//             />
//           </h1>
//         </div>

//         {/* Description Text */}
//         <div className="space-y-4">
//           <p className={`md:block hidden text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed
//                           transform transition-all duration-1000 ease-out delay-300
//                           ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
//             We bring together 
//             <span className="relative inline-block mx-1">
//               <span className="text-blue-600 font-semibold">world-class instructors</span>
//               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600/30 animate-pulse"></span>
//             </span>, 
//             interactive content, and a supportive community to help you achieve your personal and professional goals.
//           </p>

//           <p className={`md:hidden text-gray-600 max-w-sm mx-auto leading-relaxed
//                           transform transition-all duration-1000 ease-out delay-300
//                           ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
//             We bring together 
//             <span className="text-blue-600 font-semibold">world-class instructors</span> 
//             to help you achieve your professional goals.
//           </p>
//         </div>

//         {/* Search Bar with Animation */}
//         <div className={`transform transition-all duration-1000 ease-out delay-500
//                          ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
//           <SearchBar />
//         </div>

//         {/* Stats or Trust Indicators */}
//         <div className={`flex flex-wrap justify-center items-center gap-6 md:gap-12 pt-8
//                          transform transition-all duration-1000 ease-out delay-700
//                          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          
//           <div className="flex items-center space-x-2 text-gray-600 group cursor-default">
//             <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center
//                             group-hover:bg-blue-200 transition-colors duration-200">
//               <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
//               </svg>
//             </div>
//             <span className="font-medium">10,000+ Students</span>
//           </div>

//           <div className="flex items-center space-x-2 text-gray-600 group cursor-default">
//             <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center
//                             group-hover:bg-cyan-200 transition-colors duration-200">
//               <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//               </svg>
//             </div>
//             <span className="font-medium">4.8 Rating</span>
//           </div>

//           <div className="flex items-center space-x-2 text-gray-600 group cursor-default">
//             <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center
//                             group-hover:bg-green-200 transition-colors duration-200">
//               <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//               </svg>
//             </div>
//             <span className="font-medium">Certificate</span>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2
//                        transition-all duration-1000 ease-out delay-1000
//                        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//         <div className="flex flex-col items-center space-y-2 text-gray-400 cursor-pointer 
//                         hover:text-gray-600 transition-colors duration-200 group">
//           <span className="text-sm font-medium group-hover:text-blue-600 transition-colors duration-200">
//             Explore Courses
//           </span>
//           <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center
//                           group-hover:border-blue-600 transition-colors duration-200">
//             <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-bounce
//                             group-hover:bg-blue-600 transition-colors duration-200"></div>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for additional animations */}
//       <style jsx>{`
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         @keyframes float-medium {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(120deg); }
//         }
//         @keyframes float-fast {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-25px) rotate(240deg); }
//         }
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 0.6; transform: scale(1.1); }
//         }
//         @keyframes pulse-medium {
//           0%, 100% { opacity: 0.2; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(1.05); }
//         }
//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes scale-x {
//           from { transform: scaleX(0); }
//           to { transform: scaleX(1); }
//         }
        
//         .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
//         .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
//         .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
//         .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
//         .animate-pulse-medium { animation: pulse-medium 3s ease-in-out infinite; }
//         .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
//         .animate-scale-x { animation: scale-x 0.6s ease-out forwards; }
//       `}</style>
//     </div>
//   );
// };

// export default Hero;
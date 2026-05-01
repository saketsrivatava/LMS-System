import React, { use, useContext } from 'react'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import {useClerk , UserButton,useUser} from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'


const Navbar = () => {

  const {navigate,isEducator,backendUrl,setIsEducator,getToken} = useContext(AppContext)

  const isCourseListPage = location.pathname.includes('/course-list');

  const {openSignIn} = useClerk();
  const {user} = useUser();

  const becomeEducator = async()=>{
    try {
      if(isEducator){
        navigate('/educator')
        return;
      }
      const token = await getToken()
      const {data} = await axios.get(backendUrl + '/api/educator/upadte-role',{headers: {
        Authorization: `Bearer ${token}`
      }})
      if(data.success){
        setIsEducator(true)
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className={`flex justify-between items-center jusytify-between px-4 sm:px-10 md:px-14
     lg:px-36 border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <img onClick={()=> navigate('/')}src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5'>
          { user && <>
          <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard': 'Become Educator'}</button>
            <Link to='/my-enrollments'>My Enrollments</Link>
            </>}
        </div>
        {user ? <UserButton/> : <button onClick={()=> openSignIn()}className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>}
        
      </div>
     {/*For Phone Screens */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          {user && 
          <>
          <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard': 'Become Educator'}</button>
          <Link to='/my-enrollments'>My Enrollments</Link>
          </>
         }
         </div>
         {
           user ? <UserButton/> :
           <button onClick={()=> openSignIn()}>
            <img src={assets.user_icon} alt="" /></button>
         }
  </div>
    </div>
  )
}

export default Navbar
// import React, { useContext, useState, useEffect } from 'react';
// import { assets } from '../../assets/assets';
// import { Link } from 'react-router-dom';
// import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
// import { AppContext } from '../../context/AppContext';
// import 'styled-jsx/css';


// const Navbar = () => {
//   const { navigate, isEducator } = useContext(AppContext);
//   const isCourseListPage = location.pathname.includes('/course-list');
//   const { openSignIn } = useClerk();
//   const { user } = useUser();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navbarBg = isCourseListPage ? 'bg-white' : 'bg-cyan-100/70';
//   const scrollEffect = isScrolled ? 'shadow-lg backdrop-blur-md bg-white/95' : '';

//   return (
//     <nav className={`sticky top-0 z-50 transition-all duration-300 ease-out
//                      ${navbarBg} ${scrollEffect}
//                      border-b border-gray-200/50`}>
//       <div className="flex justify-between items-center px-4 sm:px-10 md:px-14 lg:px-36 py-4">
        
//         {/* Logo with Hover Animation */}
//         <div 
//           onClick={() => navigate('/')}
//           className="cursor-pointer transform transition-all duration-200 
//                      hover:scale-105 hover:brightness-110 active:scale-95"
//         >
//           <img 
//             src={assets.logo} 
//             alt="Logo" 
//             className="w-28 lg:w-32 transition-all duration-200" 
//           />
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-6">
//           {/* Navigation Links */}
//           {user && (
//             <div className="flex items-center gap-6">
//               <button
//                 onClick={() => navigate('/educator')}
//                 className="relative group px-4 py-2 text-gray-700 hover:text-blue-600 
//                            transition-all duration-200 font-medium
//                            before:absolute before:bottom-0 before:left-0 before:w-0 
//                            before:h-0.5 before:bg-blue-600 before:transition-all 
//                            before:duration-300 hover:before:w-full
//                            transform hover:translate-y-[-1px]"
//               >
//                 {isEducator ? 'Educator Dashboard' : 'Become Educator'}
//                 <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 
//                                  group-hover:opacity-100 transition-opacity duration-200 -z-10"></span>
//               </button>
              
//               <Link
//                 to="/my-enrollments"
//                 className="relative group px-4 py-2 text-gray-700 hover:text-blue-600 
//                            transition-all duration-200 font-medium
//                            before:absolute before:bottom-0 before:left-0 before:w-0 
//                            before:h-0.5 before:bg-blue-600 before:transition-all 
//                            before:duration-300 hover:before:w-full
//                            transform hover:translate-y-[-1px]"
//               >
//                 My Enrollments
//                 <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 
//                                  group-hover:opacity-100 transition-opacity duration-200 -z-10"></span>
//               </Link>
//             </div>
//           )}

//           {/* User Authentication */}
//           <div className="flex items-center">
//             {user ? (
//               <div className="transform transition-all duration-200 hover:scale-105">
//                 <UserButton 
//                   appearance={{
//                     elements: {
//                       avatarBox: "w-10 h-10 transition-all duration-200 hover:shadow-md"
//                     }
//                   }}
//                 />
//               </div>
//             ) : (
//               <button
//                 onClick={() => openSignIn()}
//                 className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 
//                            text-white px-6 py-2.5 rounded-full font-medium
//                            transform transition-all duration-200 hover:scale-105 
//                            hover:shadow-lg hover:shadow-blue-600/25 active:scale-95
//                            before:absolute before:inset-0 before:bg-white before:opacity-0 
//                            before:transition-opacity before:duration-200 hover:before:opacity-10"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   Create Account
//                   <svg className="w-4 h-4 transform transition-transform duration-200 
//                                  group-hover:translate-x-1" 
//                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
//                           d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </span>
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="md:hidden flex items-center gap-3">
//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200
//                        transform hover:scale-105 active:scale-95"
//           >
//             <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
//               <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 
//                                ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
//               <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 
//                                ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
//               <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 
//                                ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
//             </div>
//           </button>

//           {/* Mobile User Button */}
//           {user ? (
//             <div className="transform transition-all duration-200 hover:scale-105">
//               <UserButton 
//                 appearance={{
//                   elements: {
//                     avatarBox: "w-8 h-8 transition-all duration-200 hover:shadow-md"
//                   }
//                 }}
//               />
//             </div>
//           ) : (
//             <button 
//               onClick={() => openSignIn()}
//               className="p-2 rounded-lg hover:bg-blue-50 transition-all duration-200
//                          transform hover:scale-105 active:scale-95"
//             >
//               <img 
//                 src={assets.user_icon} 
//                 alt="Sign In" 
//                 className="w-6 h-6 transition-all duration-200 hover:brightness-110" 
//               />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out
//                        ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
//                        bg-white border-t border-gray-200/50 shadow-lg`}>
//         {user && (
//           <div className="px-4 py-4 space-y-3">
//             <button
//               onClick={() => {
//                 navigate('/educator');
//                 setIsMobileMenuOpen(false);
//               }}
//               className="block w-full text-left p-3 rounded-lg text-gray-700 
//                          hover:bg-blue-50 hover:text-blue-600 transition-all duration-200
//                          transform hover:translate-x-2 font-medium"
//             >
//               {isEducator ? 'Educator Dashboard' : 'Become Educator'}
//             </button>
            
//             <Link
//               to="/my-enrollments"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="block w-full text-left p-3 rounded-lg text-gray-700 
//                          hover:bg-blue-50 hover:text-blue-600 transition-all duration-200
//                          transform hover:translate-x-2 font-medium"
//             >
//               My Enrollments
//             </Link>

//             {!user && (
//               <button
//                 onClick={() => {
//                   openSignIn();
//                   setIsMobileMenuOpen(false);
//                 }}
//                 className="block w-full text-left p-3 rounded-lg bg-blue-600 text-white 
//                            hover:bg-blue-700 transition-all duration-200 font-medium
//                            transform hover:scale-105"
//               >
//                 Create Account
//               </button>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Mobile Menu Backdrop */}
//       {isMobileMenuOpen && (
//         <div 
//           className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 
//                      animate-fade-in"
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
//       )}

//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.2s ease-out;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;
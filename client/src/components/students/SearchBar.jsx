import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SearchBar = ({data}) => {
  const navigate = useNavigate();
  const onSearchHandler = (e)=>{
    e.preventDefault()//normally submitting the form causes the page to reload this line stops that form happening
    navigate('/course-list/' + input)
  }

  const [input,setInput] = useState(data? data : '');
  //this is a conditional initialization pattern
  return (
    <div>
        <form onSubmit={onSearchHandler} className='flex items-center w-full max-w-xl md:h-14 h-12 bg-white border border-gray-500/20 rounded'>
            <img src={assets.search_icon} alt="search_icon" 
            className='md:w-20 w-10 px-3'/>
            <input onChange={e=>setInput(e.target.value)} value={input} type="text" placeholder='Search for courses'
            className='w-full h-full outline-none text-gray-500/80' />
            <button type='submit' className='bg-blue-600 text-white md:px-10 px-7 md:py-3 py-2 mx-1'>
                Search
            </button>
        </form>
    </div>
  )
}
//when the user inputs anything on search bar and click on submit button it should navigate to the input path(/courselist/input)
//usenavigate is used to navigate the user to that path
//this is a controlled input-its value is controlled by react state
//when the user types into field
//onchange fires
//e.target.value is the current text
//setinput updates the state with the new value

export default SearchBar
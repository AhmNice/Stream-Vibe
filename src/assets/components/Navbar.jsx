import React, { useState } from 'react'
import logoicon from '../images/Vector.png'
import logo from '../images/StreamVibe.png'
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { NavLink, replace, useNavigate } from 'react-router-dom';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen ] = useState(false)
  const toggleOpen = ()=>{
      setIsOpen(!isOpen)
  }
  const toggleSearchDiv= ()=>{
    setSearchIsOpen(!searchIsOpen)
  }
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [type, setType] = useState('multi')
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === '') return;

    if (location.pathname === '/search_Result') {
        toggleSearchDiv();
        navigate(`/search_Result?t=${type}&q=${query}`, { replace: true });
    } else {
        navigate(`/search_Result?t=${type}&q=${query}`);
    }
};

  return (
    <div className='Manrope-SemiBold relative text-gray-400 w-full px-5 lg:px-20 py-5 flex justify-between items-center'>
        <div className="logo flex items-center gap-2">
       <div className='text-white text-4xl lg:hidden cursor-pointer'> <IoIosMenu  onClick={toggleOpen}/></div>

            <img src={logoicon} alt="" />
            <img src={logo} alt="" className='cursor-pointer' onClick={()=> navigate('/')} />
        </div>
        <nav className={`navList lg:flex absolute ${isOpen? 'block':'hidden'}  top-0 right-0 lg:relative lg:h-auto lg:w-auto w-screen h-screen z-50 lg:justify-evenly p-3 gap-10 rounded-md border-2 border-gray-600`}>
                    <div className="lg:hidden w-full flex justify-end py-5 px-2" onClick={toggleOpen}><FaTimes />
                    </div>
                    <div className='flex flex-col gap-5 lg:flex lg:flex-row'>
                    <NavLink to={'/'} className='navlist'>Home</NavLink>
                    <NavLink to={'/movies&tvshows'} className='navlist'>Movies & Shows</NavLink>
                    <NavLink to={'/support'} className='navlist'>Support</NavLink>
                    <NavLink to={'/subscription'} className='navlist'>Subscription</NavLink>
                    </div>
        </nav>
        <div className='flex gap-5 items-center'>
          <div onClick={toggleSearchDiv} className='cursor-pointer'>
            <IoIosSearch className='text-2xl' />
          </div>
          <IoMdNotificationsOutline className='text-2xl' />
        </div>

        <div className={`${searchIsOpen ? 'absolute':'hidden'} searchOverlay left-0 top-0 h-screen w-full z-12 flex items-center flex-col justify-center`}>
          <div className="close absolute top-0 p-12 right-0 text-white text-2xl" onClick={toggleSearchDiv}> <FaTimes /> </div>
                <div className='flex lg:w-7/12 gap-6 justify-between bg-white rounded-full p-2 px-6 text-gary-900'>
                  <form onSubmit={handleSearch} className='flex justify-between gap-5'>
                      <input
                      type="text"
                      className='outline-none rounded-lg text-gray-900 p-2 border lg:w-[570px] border-gray-500'
                      placeholder='type in your search'
                      onChange={(e)=> setQuery(e.target.value)}/>

                  <div className='flex items-center'>
                    <p className='text-sm'>search by:</p>
                    <select name="selection" id="selection"
                    onChange={(e)=> setType(e.target.value)} >
                    <option value="multi">Default</option>
                    <option value="movie">Movie</option>
                    <option value="tv">Tv Show</option>
                  </select>
                  </div>
                  </form>
                </div>
        </div>

    </div>
  )
}

export default Navbar
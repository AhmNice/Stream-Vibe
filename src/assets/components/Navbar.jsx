import React, { useState } from 'react'
import logoicon from '../images/Vector.png'
import logo from '../images/StreamVibe.png'
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = ()=>{
      setIsOpen(!isOpen)
  }
  return (
    <div className='Manrope-SemiBold relative text-gray-400 w-full px-5 md:px-20 py-5 flex justify-between items-center'>
        <div className="logo flex items-center gap-2">
       <div className='text-white text-4xl md:hidden'> <IoIosMenu  onClick={toggleOpen}/></div>

            <img src={logoicon} alt="" />
            <img src={logo} alt="" />
        </div>
        <nav className={`navList md:flex absolute ${isOpen? 'block':'hidden'}  top-0 right-0 md:relative md:h-auto md:w-auto w-screen h-screen z-10 md:justify-evenly p-3 gap-10 rounded-md border-2 border-gray-600`}>
                    <div className="md:hidden w-full flex justify-end py-5 px-2" onClick={toggleOpen}><FaTimes />
                    </div>
                    <NavLink to={'/'} className='navlist'>Home</NavLink>
                    <NavLink to={'/movie'} className='navlist'>Movies & Shows</NavLink>
                    <NavLink to={'/support'} className='navlist'>Support</NavLink>
                    <NavLink to={'/subscription'} className='navlist'>Subscription</NavLink>
        </nav>
        <div className='flex gap-5 items-center'>
          <IoIosSearch className='text-2xl' />
          <IoMdNotificationsOutline className='text-2xl' />
        </div>

    </div>
  )
}

export default Navbar
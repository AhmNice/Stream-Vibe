import React from 'react'
import ConstructionIcon from '../assets/images/construction.png'
import {  useNavigate } from 'react-router-dom'
import { IoIosConstruct } from "react-icons/io";


const PageUnderConstruction = () => {
  const navigate = useNavigate()
  return (
    <div className='md:w-screen w-full h-screen'>
            <div className="flex item-center justify-center w-full h-full items-center flex-col gap-4">
                    <IoIosConstruct className='text-9xl text-red'/>
                    <p className='text-5xl text-white Manrope-Bold'>Page under Construction </p>
                    <button onClick={()=> navigate('/')}>Go Home</button>
            </div>
    </div>
  )
}

export default PageUnderConstruction
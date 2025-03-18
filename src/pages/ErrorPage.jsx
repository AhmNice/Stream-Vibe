import React from 'react'
import { IoWarning } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div className='md:w-screen h-screen w-full'>
            <div className="flex flex-col   gap-4 items-center justify-center h-full">
                <IoWarning className='text-red text-9xl'/>
                <p className='text-white text-5xl'>Page not found</p>
                <button onClick={()=> navigate('/')}>Go Home</button>
            </div>
    </div>
  )
}

export default ErrorPage
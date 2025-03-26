import React from 'react'
import { FaPlus, FaThumbsUp } from 'react-icons/fa'
import { IoPlay, IoVolumeHigh } from 'react-icons/io5'
const POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/original/'

const Banner = ({movie,key}) => {
  return (
    <div className='w-full h-full relative shrink-0' key={key}>
        <div className="w-full h-full">
            <img src={`${POSTER_BASE_PATH}${movie.backdrop_path}`} alt="" className='w-full h-full object-fill'/>
        </div>
        <div className="absolute w-full h-full flex justify-end items-center flex-col top-0 left-0 pb-12">
            <h3 className='Manrope-Bold text-white text-centre text-4xl z-2'>{movie.title}</h3>
            <p className='Manrope-Regular text-gray-400 text-center text-md p-4 z-2 lg:block hidden'>{movie.overview}</p>
            <div className="flex gap-3 lg:flex  mt-4 justify-center items-center lg:flex-row   z-10">
                <button className='bt-bg-red-900 text-white px-10 py-5 flex items-center gap-2' > <IoPlay /> Play Now</button>
                <div className='flex items-center gap-3 pb-8 lg:pb-0'>
                    <button className='bt-bg-black-900 text-white'><FaPlus/></button>
                    <button className='bt-bg-black-900 text-white'><FaThumbsUp  /></button>
                    <button className='bt-bg-black-900 text-white'><IoVolumeHigh /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
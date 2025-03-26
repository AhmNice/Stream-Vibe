import React from 'react'
import { IoTime } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/original/'

const MovieCard = ({movie}) => {
    const navigate = useNavigate()
    const compactNumber = (value) => {
        const suffixes = ['', 'k', 'm', 'b', 't'];
        const suffixNum = Math.floor(('' + value).length / 3);

        if (suffixNum === 0) return value.toString(); // No need to format small numbers

        let shortHand = value / Math.pow(1000, suffixNum);
        shortHand = shortHand % 1 !== 0 ? shortHand.toFixed(1) : shortHand; // Keep 1 decimal if needed

        return shortHand + suffixes[suffixNum]; // Return formatted number with suffix
    };
  return (
    <div className='movieCard rounded-lg p-2 h-full h-max flex flex-col gap-2 cursor-pointer' onClick={()=> navigate(`/movie/${movie.id}`,{replace:true})}>
        <div className="flex justify-center h-[70%] overflow-hidden">
            <img src={`${POSTER_BASE_PATH}${movie.poster_path}`} alt="" className='rounded-md h-full w-full object-cover' loading='lazy'/>
        </div>
        <div className="flex justify-between">
            <div className="time rounded-full text-sm justify-center px-1 flex gap-2 items-center text-gray-400 Manrope-Regular">
                <IoTime/>
                <p className='text-sm'>{movie.release_date}</p>
            </div>
            <div className="count flex rounded-full text-sm justify-center px-1 gap-2 items-center text-gray-400 Manrope-Regular">
                <IoEyeSharp/>
                <p className='text-sm'>{compactNumber(movie.vote_count)}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard
import React from 'react'
import { HiCollection, HiOutlineCollection } from 'react-icons/hi';
import { IoTime } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
const POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/original/';


const MovieCardAlt = ({movie, isNew= false,isShow = false}) => {
  const navigate = useNavigate()
    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes/60);
        const mins = minutes % 60 ;
        return `${hours}hrs ${mins}mins`
      };
      const formatReleasedDate =(date) =>{
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
        const paredDate = new Date(date)
        const month = paredDate.getMonth()
        const year = paredDate.getFullYear()
        const day = paredDate.getDate()
        return `Released at ${day} ${months[month]} ${year}`
      }
      // console.log(movie.total_runtime)
  return (
    <div className='categoryCard cursor-pointer shrink-0 snap-center rounded-xl flex flex-col  gap-5 p-4 '
    onClick={()=> navigate(`/${isShow ? 'show':'movie'}?id=${movie.id}&type=${isShow? 'tv':'movie'}`)}
    >
        <div className="moviePoster rounded-lg w-full ">
            <img src={`${POSTER_BASE_PATH}${movie.poster_path}`} alt={movie.title} className='rounded-lg h-full w-full' loading='lazy'/>
        </div>
        <div className="flex justify-between items-center ">
          {
             isShow ? (
            <div className='flex justify-between'>

               {/* <div className="detailsDiv rounded-full px-3 py-1 text-gray-400 Manrope-Regular text-sm"> {formatRuntime(movie.total_runtime)} </div> */}
               <div className="detailsDiv rounded-full px-3 py-1 text-gray-400 Manrope-Regular text-sm flex items-center gap-2"><HiOutlineCollection />
               {movie.number_of_seasons} seasons </div>
            </div>
            ): (
              isNew ? (<div className="detailsDiv rounded-full px-3 py-1 text-gray-400 Manrope-Regular text-xs">  {formatReleasedDate(movie.release_date)}</div>): ( <div className="detailsDiv rounded-full px-3 py-1 text-gray-400 Manrope-Regular text-sm flex items-center gap-2"><IoTime/> {formatRuntime(movie.runtime)}</div>)
           )
          }
        </div>
    </div>
  )
}

export default MovieCardAlt
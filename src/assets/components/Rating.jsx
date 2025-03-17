import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from 'react-icons/fa6';


const Rating = ({rating = 2}) => {
  return (
    <div className='rounded-full border border-gray-500 text-red w-[40%] flex text-lg'>
            {Array.from({length:5}).map((_,index)=>{
               if(rating){}
            })}
    </div>
  )
}

export default Rating
import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from 'react-icons/fa6';
// import PropTypes from 'prop-types';
const Rating = ({rating, maxRating = 6}) => {
    const ratings =[]
    for (let index = 1; index < maxRating; index++) {
        if(index <= rating){
            ratings.push(<FaStar key={index} className='text-red' />)
        }else if(index - 0.5 === rating){
            ratings.push(<FaStarHalfAlt key={index} className='text-red' />)
        }else {
            ratings.push(<FaStar key={index} className='text-gray-400'/>)
        }

    }
  return (
        <div className="flex gap-2">{ratings}</div>
  )

}

export default Rating
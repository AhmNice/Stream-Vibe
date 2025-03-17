import React from 'react'

const BackImage = ({image}) => {
  return (
    <div className='h-24 w-32 overflow-hidden border border-gray-800'>
        <img src={image} alt="" className='w-full h-full object-cover' />
    </div>
  )
}

export default BackImage
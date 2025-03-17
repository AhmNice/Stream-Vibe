import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div className='rounded-md w-32 h-36 overflow-hidden border border-gray-800'>
        <img src={image} alt="" className='w-full h-full object-fill' />
    </div>
  )
}

export default ImageCard
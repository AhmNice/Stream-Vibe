import React from 'react'
import { HiOutlineArrowSmallRight } from 'react-icons/hi2'

const CategoryCard = ({title,images}) => {
  return (
    <div className='flex-shrink-0 w-64 h-80 md:w-56 md:h-64 relative border border-gray-700 rounded-md bg p-5 overflow-hidden'>
        <div className="grid grid-cols-2 gap-2">
                {images.map((image,index)=>
                    <div key={index} className='rounded-sm h-full'>
                        <img  src={image} alt="image" />
                    </div>
                )}
        </div>
        <div className="title flex text-white items-baseline h-full w-full flex-col p-4 left-0 justify-between absolute bottom-0 Manrope-SemiBold">
           <div></div>
           <div className='flex justify-between items-center w-full'>
           <p>{title}</p>
           <HiOutlineArrowSmallRight/>
           </div>
        </div>
    </div>
  )
}

export default CategoryCard
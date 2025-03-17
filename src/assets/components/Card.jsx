import React from 'react'

const Card = ({icon,title,text}) => {
  return (
    <div className='card h-full rounded-md p-8 flex flex-col gap-5 justify-center'>
        <div className="cardHead flex gap-5 items-center">
            <div className="cardIcon rounded-sm border border-gray-700 p-2 ">
                <img src={icon} alt="icon" />
            </div>
            <h3 className='text-white Manrope-SemiBold text-xl'>{title}</h3>
        </div>
        <div className="cardBody">
            <p className='text-base text-gray-500 Manrope-Regular'>{text}</p>
        </div>
    </div>
  )
}

export default Card
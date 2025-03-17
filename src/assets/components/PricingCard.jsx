import React from 'react'

const PricingCard = ({type, description, price}) => {
  return (
    <div className='pricingCard p-6 rounded-md text-white flex flex-col gap-6 w-full'>
        <h3 className='Manrope-Bold text-xl'>{type}</h3>
        <p className='text-gray-500 Manrope-Regular text-base'>{description}</p>
        <p className='text-gray-500'><span className='Manrope-SemiBold text-2xl text-white'>{price}</span>/month</p>
    <div className="btns flex md:gap-6 gap-2">
        <button className='rounded-sm w-full  text-xm md:px-8 md:py-12 '>Free Trial</button>
        <button className='rounded-sm w-full  text-xm md:px-8 md:py-12'>Choose Plan</button>
    </div>
    </div>
  )
}

export default PricingCard
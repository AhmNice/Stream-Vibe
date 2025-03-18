import React from 'react'
import BackImage from './BackImage'


const FootAds = ({pictures}) => {
  return (
    <div className='flex md:px-20 w-screen px-8 py-20'>
    <div className="rounded-md trialCard relative h-62 w-full relative overflow-hidden">
      <div className="backimage grid grid-cols-9 overflow-hidden gap-5">
        {pictures.map((picture, index) =>
          <BackImage key={index} image={picture.src} />
        )}
      </div>
      <div className="trialCardOverlay top-0 md:flex md:flex-row md:justify-between left-0 p-5 gap-5 justify-center items-center md:p-20 flex flex-col md:justify-between items center absolute w-full h-full">
        <div>
          <h3 className='Manrope-Bold text-xl md:text-3xl text-white'>Start your free trial today!</h3>
          <p className='text-gray-500'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
        </div>
        <div className='trialBtn'>
          <button className='px-8 py-10 bg-red-900 text-white'>Start A Free Trial</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FootAds
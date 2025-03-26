import React from 'react'
import ImageCard from './ImageCard';

const BackdropGrid = () => {
    const pictures = [
        { src: 'src/assets/images/image.png' },
        { src: 'src/assets/images/image-1.png' },
        { src: 'src/assets/images/image-2.png' },
        { src: 'src/assets/images/image-3.png' },
        { src: 'src/assets/images/image-4.png' },
        { src: 'src/assets/images/image-5.png' },
        { src: 'src/assets/images/image-6.png' },
        { src: 'src/assets/images/image-7.png' },
        { src: 'src/assets/images/image-8.png' },
        { src: 'src/assets/images/image-9.png' },
        { src: 'src/assets/images/image-10.png' },
        { src: 'src/assets/images/image-11.png' },
        { src: 'src/assets/images/image-12.png' },
        { src: 'src/assets/images/image-13.png' },
        { src: 'src/assets/images/image-14.png' },
        { src: 'src/assets/images/image-15.png' },
        { src: 'src/assets/images/image-16.png' },
        { src: 'src/assets/images/image-17.png' },
        { src: 'src/assets/images/image-18.png' },
        { src: 'src/assets/images/image-19.png' },
        { src: 'src/assets/images/image-20.png' },
        { src: 'src/assets/images/image-21.png' },
        { src: 'src/assets/images/image-22.png' },
        { src: 'src/assets/images/image-23.png' },
        { src: 'src/assets/images/image-24.png' },
        { src: 'src/assets/images/image-25.png' },
        { src: 'src/assets/images/image-26.png' },
        { src: 'src/assets/images/image-27.png' },
        { src: 'src/assets/images/image-28.png' },
        { src: 'src/assets/images/image-29.png' },
        { src: 'src/assets/images/image-30.png' },
        { src: 'src/assets/images/image-31.png' },
        { src: 'src/assets/images/image-32.png' },
        { src: 'src/assets/images/image-33.png' },
        { src: 'src/assets/images/image-34.png' },
        { src: 'src/assets/images/image-35.png' }
      ];
  return (
    <div className='grid shrink-0 grid-cols-9 gap-2 '>
        {pictures.map((picture, index) =>
            <ImageCard key={index} image={picture.src} />
          )}
    </div>
  )
}

export default BackdropGrid
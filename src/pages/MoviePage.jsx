import React, { useRef } from 'react';
import Footer from '../assets/components/Footer';
import Navbar from '../assets/components/Navbar';
import { IoPlay, IoVolumeHigh } from "react-icons/io5";
import { FaPlus } from 'react-icons/fa6';
import { FaThumbsUp } from 'react-icons/fa6';
import SliderControl from '../assets/components/SliderControl';
import Rating from '../assets/components/Rating';

const MoviePage = () => {
    const reviewScrollRef = useRef(null);
    const castScrollRef = useRef(null)
    const movieDetails = {
        title: "Kantara",
        year: 2022,
        genre: ["Action", "Drama", "Thriller"],
        director: "Rishab Shetty",
        description:'A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.',
        cast: [
          { name: "Rishab Shetty", role: "Shiva", image: "src/assets/images/kantara-poster.png" },
          { name: "Sapthami Gowda", role: "Leela", image: "src/assets/images/kantara-poster.png" },
          { name: "Kishore", role: "Forest Officer", image: "src/assets/images/kantara-poster.png" },
          { name: "Achyuth Kumar", role: "Devendra Suttooru", image: "src/assets/images/kantara-poster.png" },
          { name: "Pramod Shetty", role: "Sudhakara", image: "src/assets/images/kantara-poster.png" },
          { name: "Naveen D Padil", role: "Guruva", image: "src/assets/images/kantara-poster.png" }
        ],
        plot: "A story of a Kambala champion who is at loggerheads with a forest officer.",
        runtime: "150 min",
        rating: "8.5",
        language: ["Kannada"],
        country: "India",
        awards: [
          "Best Actor - Rishab Shetty",
          "Best Director - Rishab Shetty",
          "Best Cinematography",
          "Best Music"
        ],
        poster: "src/assets/images/kantara-poster.png",
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        reviews: [
            {
              reviewer: "John Doe",
              comment: "An amazing movie with a gripping storyline and fantastic performances.",
              rating: 5
            },
            {
              reviewer: "John Doe",
              comment: "An amazing movie with a gripping storyline and fantastic performances.",
              rating: 5
            },
            {
              reviewer: "John Doe",
              comment: "An amazing movie with a gripping storyline and fantastic performances.",
              rating: 5
            },
            {
              reviewer: "Jane Smith",
              comment: "A must-watch! The cinematography and direction are top-notch.",
              rating: 4.5
            },
            {
              reviewer: "Jane Smith",
              comment: "A must-watch! The cinematography and direction are top-notch.",
              rating: 4.5
            },
            {
              reviewer: "Sam Wilson",
              comment: "A brilliant portrayal of folklore and spirituality. Highly recommended.",
              rating: 4.8
            },
            {
              reviewer: "Sam Wilson",
              comment: "A brilliant portrayal of folklore and spirituality. Highly recommended.",
              rating: 4.8
            },
            {
              reviewer: "Sam Wilson",
              comment: "A brilliant portrayal of folklore and spirituality. Highly recommended.",
              rating: 4.8
            }
          ]
    };
  return (
    <section className='w-full h-full'>
        <section>
            <div className="w-screen md:w-screen">
                <Navbar />
            </div>
        </section>
        <section className='py-8 md:flex md:gap-8 md:flex-col '>
            <div className="flex  justify-center w-screen md:w-full px-8 md:px-20 ">
                <div className="rounded-md relative preview w-full md:h-[460px]">
                    <div className="w-full h-full  md:h-full rounded-md">
                        <img src={movieDetails.poster} alt="movie poster" className='rounded-md w-full h-full object-cover'/>
                    </div>
                    <div className="overlay2 p-6 absolute top-0 left-0 w-full h-full flex justify-center flex-base rounded-md items-end">
                            <div className="flex justify-center gap-2 items-center flex-col">
                                <h3 className='Manrope-Bold text-2xl text-white'>{movieDetails.title}</h3>
                                <p className='text-gray-400 text-center Manrope-regular'>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
                                <div className="flex gap-3 items-center mt-4">
                                    <button className='bt-bg-red-900 text-white px-10 py-5 flex items-center gap-2' > <IoPlay /> Play Now</button>
                                    <button className='bt-bg-black-900 text-white'><FaPlus/></button>
                                    <button className='bt-bg-black-900 text-white'><FaThumbsUp  /></button>
                                    <button className='bt-bg-black-900 text-white'><IoVolumeHigh /></button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <section className='px-8 md:px-20'>
                <div className="flex md:w-full w-screen gap-4">
                    <div className="w-[65%]  rounded-md md:p-8 flex flex-col gap-4">
                            <div className="description bg-black-shade-3 md:p-8 flex flex-col gap-3">
                                <p className="Manrope-Medium text-lg text-gray-400">Description</p>
                                <p className="Manrope-Medium text-lg text-gray-300">{movieDetails.description}</p>
                            </div>
                            <div className="description bg-black-shade-3 md:p-8 flex flex-col gap-3">
                              <div className="head flex justify-between">
                              <p className="Manrope-Medium text-lg text-gray-400">Cast</p>
                              <div><SliderControl scrollRef={castScrollRef}/></div>
                              </div>
                                <div className="slide flex gap-4 overflow-x-scroll  py-3"ref={castScrollRef}>
                                    {movieDetails.cast.map((cast, index)=>(
                                        <div key={index} className='rounded-sm md:w-24 shrink-0 md:h-24 overflow-hidden '>
                                            <img src={cast.image} alt='castImage' className='w-full h-full object-cover rounded-sm' />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="reviews md:p-8  bg-black-shade-3 flex flex-col gap-2 ">
                                <div className="head flex justify-between">
                                    <p className="Manrope-Medium text-lg text-gray-400">Reviews</p>
                                    <div></div>
                                </div>
                                <div className="flex gap-5  overflow-x-scroll w-full pb-3" ref={reviewScrollRef}>
                                {movieDetails.reviews.map((review,index)=>(
                                    <div key={index} className='reviewCard shrink-0 flex flex-col gap-3 rounded-md p-4 md:w-[48%] '>
                                        <div className="flex justify-between">
                                            <div className="flex flex-col">
                                                <p className="text-white Manrope-Bold">{review.reviewer}</p>
                                                <p className="text-gray-500 Manrope-regular">{review.country}</p>
                                            </div>
                                        </div>
                                       <p className="text-gray-400">{review.comment}</p>
                                    </div>
                                ))}
                                </div>

                                <div className="flex justify-center p-5">
                                        <SliderControl indicator={true} scrollRef={reviewScrollRef}/>
                                </div>
                            </div>
                    </div>
                    <div className="w-[35%]  rounded-md md:p-8 flex flex-col">
                            <Rating />
                    </div>
                </div>
            </section>
        </section>
    <Footer/>
    </section>
  );
}

export default MoviePage;
import React, { useEffect, useRef, useState } from 'react';
import Footer from '../assets/components/Footer';
import Navbar from '../assets/components/Navbar';
import { IoPlay, IoVolumeHigh } from "react-icons/io5";
import { FaPlus } from 'react-icons/fa6';
import { FaThumbsUp } from 'react-icons/fa6';
import SliderControl from '../assets/components/SliderControl';
import Rating from '../assets/components/Rating';
import { CiCalendar } from 'react-icons/ci';
import { HiLanguage } from 'react-icons/hi2';
import { BiCollection } from 'react-icons/bi';
import { IoIosStarOutline } from 'react-icons/io';
import FootAds from '../assets/components/FootAds';

const MoviePage = () => {
    const reviewScrollRef = useRef(null);
    const castScrollRef = useRef(null)
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

    const movieDetails = {
        title: "Kantara",
        year: 2022,
        genre: ["Action", "Drama", "Thriller"],
        director: [
            {name: "Rishab Shetty" , image:'src/assets/images/image-36.png' }
        ],
        music: [
            {name: "Kishore" , image:'src/assets/images/image-40.png' }
        ],
        description:'A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.',
        cast: [
          { name: "Rishab Shetty", role: "Shiva", image: "src/assets/images/image-36.png" },
          { name: "Sapthami Gowda", role: "Leela", image: "src/assets/images/image-37.png"},
          { name: "Kishore", role: "Forest Officer", image: "src/assets/images/image-38.png" },
          { name: "Achyuth Kumar", role: "Devendra Suttooru", image: "src/assets/images/image-39.png" },
          { name: "Pramod Shetty", role: "Sudhakara", image: "src/assets/images/image-40.png" },
          { name: "Naveen D Padil", role: "Guruva", image: "src/assets/images/image-41.png" },
          { name: "Naveen D Padil", role: "Guruva", image: "src/assets/images/image-42.png" },
          { name: "Naveen D Padil", role: "Guruva", image: "src/assets/images/image-43.png" }
        ],
        plot: "A story of a Kambala champion who is at loggerheads with a forest officer.",
        runtime: "150 min",
        rating: [
            {
                name: 'IMDb',
                rating : 4.5
            },
            {
                name: 'StreamVibe',
                rating : 4
            }
        ],
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
              rating: 4.5
            },
            {
              reviewer: "Sam Wilson",
              comment: "A brilliant portrayal of folklore and spirituality. Highly recommended.",
              rating: 4.5
            },
            {
              reviewer: "Sam Wilson",
              comment: "A brilliant portrayal of folklore and spirituality. Highly recommended.",
              rating: 4.5
            }
          ]
    };
    const [itemsPerPage, setItemsPerPage] = useState(1);
    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
        };
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);


  return (
    <section className='lg:w-screen h-full'>
        <section className='w-full'>
            <div className="w-screen lg:w-screen">
                <Navbar />
            </div>
        </section>
        <section className='py-2 lg:flex lg:gap-8 lg:flex-col '>
            <div className="flex  justify-center w-screen lg:w-full px-8 lg:px-20 ">
                <div className="rounded-md relative preview w-full lg:h-[460px] h-[80vh]">
                    <div className=" h-full  lg:h-full rounded-md">
                        <img src={movieDetails.poster} alt="movie poster" className='rounded-md w-full h-full object-cover'/>
                    </div>
                    <div className="overlay2 p-6 absolute top-0 left-0 w-full h-full flex justify-center flex-base rounded-md items-end">
                            <div className="flex justify-center gap-2 items-center flex-col">
                                <h3 className='Manrope-Bold text-2xl text-white'>{movieDetails.title}</h3>
                                <p className='text-gray-400 text-center Manrope-regular  lg:block hidden'>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
                                <div className="flex gap-3 items-center mt-4 flex-col lg:flex-row">
                                    <button className='bt-bg-red-900 text-white px-10 py-5 flex items-center gap-2' > <IoPlay /> Play Now</button>
                                   <div className='flex gap-3'>
                                        <button className='bt-bg-black-900 text-white'><FaPlus/></button>
                                        <button className='bt-bg-black-900 text-white'><FaThumbsUp  /></button>
                                        <button className='bt-bg-black-900 text-white'><IoVolumeHigh /></button>
                                   </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <section className='px-8 lg:px-14 w-screen py-4 '>
                <div className="flex lg:w-full  gap-4 lg:flex-row flex-col lg:gap-1">
                    <div className="lg:w-[65%]  w-[100%] lg:p-8 flex flex-col gap-4">
                            <div className="description bg-black-shade-3 lg:p-8 p-4 flex flex-col rounded-md gap-3">
                                <p className="Manrope-Medium text-lg text-gray-400">Description</p>
                                <p className="Manrope-Medium text-lg text-gray-300">{movieDetails.description}</p>
                            </div>
                            <div className="description rounded-md p-4 bg-black-shade-3 lg:p-8 flex flex-col gap-3">
                              <div className="head flex justify-between">
                              <p className="Manrope-Medium text-lg text-gray-400">Cast</p>
                              <div><SliderControl scrollRef={castScrollRef}/></div>
                              </div>
                                <div className="slide flex gap-4  overflow-x-scroll  py-3"ref={castScrollRef}>
                                    {movieDetails.cast.map((cast, index)=>(
                                        <div key={index} className='rounded-sm lg:w-24 shrink-0 lg:h-24 overflow-hidden '>
                                            <img src={cast.image} alt='castImage' className='w-full h-full object-cover rounded-sm' />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="reviews lg:p-8 rounded-md p-4 bg-black-shade-3 flex flex-col gap-2 ">
                                <div className="head flex justify-between">
                                    <p className="Manrope-Medium text-lg text-gray-400">Reviews</p>
                                    <div></div>
                                </div>
                                <div className="flex gap-5  overflow-x-scroll w-full pb-3" ref={reviewScrollRef}>
                                {movieDetails.reviews.map((review,index)=>(
                                    <div key={index} className='reviewCard shrink-0 flex flex-col gap-3 rounded-md p-4 lg:w-[48%] w-full'>
                                        <div className="flex justify-between">
                                            <div className="flex flex-col">
                                                <p className="text-white Manrope-Bold">{review.reviewer}</p>
                                                <p className="text-gray-500 Manrope-regular">{review.country}</p>
                                            </div>
                                            <div className="flex bg-black rounded-full border border-gray-700 items-center justify-center p-1">
                                                <Rating rating={review.rating} />
                                            </div>
                                        </div>
                                       <p className="text-gray-400">{review.comment}</p>
                                    </div>
                                ))}
                                </div>

                                <div className="flex justify-center p-5">
                                        <SliderControl indicator={true} scrollRef={reviewScrollRef} itemsPerPage={itemsPerPage}/>
                                </div>
                            </div>
                    </div>
                    {/* side two */}
                    <div className="lg:w-[35%]  rounded-md lg:p-8  flex flex-col h-max">
                            <div className="bg-black-shade-3 p-4 rounded-md lg:p-8 h-full w-full flex flex-col gap-3">
                              <div className="flex gap-2 flex-col">
                                <div className='flex gap-2 items-center Manrope-Regular text-gray-300'>
                                    <CiCalendar />
                                    <p>Released Year</p>
                                </div>
                                <h2 className="Manrope-SemiBold text-white">
                                    {movieDetails.year}
                                </h2>
                              </div>

                              <div className="flex gap-2 flex-col">
                                <div className='flex gap-2 items-center Manrope-Regular text-gray-300'>
                                    <HiLanguage />
                                    <p>Available Language</p>
                                </div>
                                <div className="Manrope-SemiBold text-white flex gap-2 text-sm">
                                    {movieDetails.language.map((language, index)=>(
                                        <div key={index} className="bg-black rounded-md w-max p-1">
                                            <p >{language}</p>
                                        </div>
                                    ))}
                                </div>
                              </div>

                              <div className="flex gap-2 flex-col">
                                <div className='flex gap-2 items-center Manrope-Regular text-gray-300'>
                                    <IoIosStarOutline />
                                    <p>Ratings </p>
                                </div>
                                <div className="Manrope-SemiBold text-white flex gap-2 text-sm">
                                    {movieDetails.rating.map((rating, index)=>(
                                        <div key={index} className="bg-black rounded-md w-full ">
                                            <div  className='bg-black p-4 flex flex-col gap-2 rounded-md'>
                                                    <h3 className='Manrope-SemiBold'>{rating.name}</h3>
                                                    <Rating rating={rating.rating} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                              </div>

                              <div className="flex gap-2 flex-col">
                                <div className='flex gap-2 items-center Manrope-Regular text-gray-300'>
                                    <BiCollection />
                                    <p>Genres </p>
                                </div>
                                <div className="Manrope-SemiBold text-white flex gap-2 text-sm">
                                    {movieDetails.genre.map((genre, index)=>(
                                        <div key={index} className="bg-black rounded-md w-max p-1 ">
                                            <p >{genre}</p>
                                        </div>
                                    ))}
                                </div>
                              </div>

                              <div className="flex gap-2 flex-col">
                                <div className='flex gap-2 items-center Manrope-Regular text-gray-300'>
                                    <p>Director </p>
                                </div>
                                <div className="Manrope-SemiBold text-white flex gap-2 text-sm">
                                    {movieDetails.director.map((director, index)=>(
                                        <div key={index} className="bg-black rounded-md w-full p-2 flex gap-2 ">
                                            <img src={director.image} alt=""  className='w-12 h-12'/>
                                            <div>
                                            <p className='text-sm Manrope-Regular'>{director.name}</p>
                                            <p className='Manrope-Regular text-gray-400'>From India</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                              </div>

                              <div className="flex gap-2 flex-col">
                                <div className='flex gap-2 items-center Manrope-Regular text-gray-300'>
                                    <p>Music </p>
                                </div>
                                <div className="Manrope-SemiBold text-white flex gap-2 text-sm">
                                    {movieDetails.music.map((music, index)=>(
                                        <div key={index} className="bg-black rounded-md w-full p-2 flex gap-2 ">
                                            <img src={music.image} alt=""  className='w-12 h-12'/>
                                            <div>
                                            <p className='text-sm Manrope-Regular'>{music.name}</p>
                                            <p className='Manrope-Regular text-gray-400'>From India</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                              </div>

                            </div>
                    </div>
                </div>
            </section>
        </section>

        <section>
            <FootAds pictures={pictures}/>
        </section>
    <Footer/>
    </section>
  );
}

export default MoviePage;
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
import { useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
const POSTER_BASE_PATH ='https://image.tmdb.org/t/p/original/'
const CAST_IMAGE_BASE_PATH ='https://image.tmdb.org/t/p/w500'
const BASE_URL = 'https://api.themoviedb.org/3/'
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmU3NTY1MmY4NWQ1NDZlNjNkZGFkZmU1MGU3NjU1YiIsIm5iZiI6MTc0MjE1MDY1MC40NTQwMDAyLCJzdWIiOiI2N2Q3MWJmYWViYzMwYTBiNDgwMTM3NmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.p2Y-AAKohHDKdSLyRFDKe52NMtBLu4Uc868VM2dIgxQ"; // Replace with actual TMDb API token
const API_KEY = '16e75652f85d546e63ddadfe50e7655b'

const MoviePage = () => {
    const reviewScrollRef = useRef(null);
    const castScrollRef = useRef(null)
    const location = useLocation()
    const [movieDetails, setMovieDetails] = useState([])
    const [castLists, setCastLists] = useState([])
    const [loading, setLoading] = useState({
        cast: false,
        details:false
    })
    const queryId = new URLSearchParams(location.search).get('id');
    const movieType = new URLSearchParams(location.search).get('type');

// fetching movie or show details
useEffect(() => {
    const fetchMovieDetails = async () => {
        try {
            setLoading((prev) => ({ ...prev, details: true }));
            const detailsResponse = await fetch(
                `${BASE_URL}${movieType}/${queryId}?api_key=${API_KEY}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await detailsResponse.json();
            setMovieDetails(data);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        } finally {
            setLoading((prev) => ({ ...prev, details: false }));
        }
    };
    if (queryId && movieType) {
        fetchMovieDetails();
    }
}, [queryId, movieType]);
// fetching movie or show casts
useEffect(() => {
    const fetchMovieCast = async () => {
        try {
            setLoading((prev) => ({ ...prev, cast: true }));
            const castResponse = await fetch(
                `${BASE_URL}${movieType}/${queryId}/credits?api_key=${API_KEY}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await castResponse.json();
            setCastLists(data.cast);

            // Find Director from crew array
            const director = data.crew.find(person => person.job === "Director");

            setMovieDetails(prev => ({
                ...prev,
                director: director ? { name: director.name, profile_path: director.profile_path } : null
            }));

        } catch (error) {
            console.error('Error fetching cast details:', error);
        } finally {
            setLoading((prev) => ({ ...prev, cast: false }));
        }
    };

    if (queryId && movieType) {
        fetchMovieCast();
    }
}, [queryId, movieType]);

    const [itemsPerPage, setItemsPerPage] = useState(1);
    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
        };
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);
    const formatDate =(dateString)=>{
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
        const parseDate = new Date(dateString);
        const year = parseDate.getFullYear()
        const month = parseDate.getMonth()
        const day = parseDate.getDay()
        return `${day} ${months[month]}, ${year}`
    }

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
                    {loading.details? (
                        <div className='m-auto h-full flex items-center justify-center'>
                        <BeatLoader color="#E50000" size={20}  />
                      </div>
                    ):(
                        <div className=" h-full  lg:h-full rounded-md">
                        <img src={`${POSTER_BASE_PATH}/${movieDetails.backdrop_path}`} alt="movie poster" className='rounded-md w-full h-full '/>
                    </div>
                    )}
                    <div className="overlay2 p-6 absolute top-0 left-0 w-full h-full flex justify-center flex-base rounded-md items-end">
                            <div className="flex justify-center gap-2 items-center flex-col">
                                <h3 className='Manrope-Bold text-2xl text-white'>{movieDetails.title}</h3>
                                <p className='text-gray-400 text-center Manrope-regular  lg:block hidden'>{movieDetails.overview}</p>
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
                                <p className="Manrope-Medium text-lg text-gray-300">{movieDetails.overview}</p>
                            </div>
                            <div className="description rounded-md p-4 bg-black-shade-3 lg:p-8 flex flex-col gap-3">
                              <div className="head flex justify-between">
                              <p className="Manrope-Medium text-lg text-gray-400">Cast</p>
                              <div><SliderControl scrollRef={castScrollRef}
                              /></div>
                              </div>
                                {loading.cast? (
                                    <div className='m-auto h-full flex items-center justify-center'>
                                        <BeatLoader color="#E50000" size={20}  />
                                    </div>
                                ): (
                                    <div className="slide flex gap-4  overflow-x-scroll  py-3"ref={castScrollRef}>
                                    {castLists.map((cast, index)=>(
                                        <div key={index} className='rounded-sm lg:w-20 shrink-0 lg:h-20 overflow-hidden snap-center'>
                                            <img src={`${CAST_IMAGE_BASE_PATH}${cast.profile_path}`} alt='castImage' className='w-full h-full  rounded-sm' />
                                        </div>
                                    ))}
                                </div>
                                )}
                            </div>

                            <div className="reviews lg:p-8 rounded-md p-4 bg-black-shade-3 flex flex-col gap-2 ">
                                <div className="head flex justify-between">
                                    <p className="Manrope-Medium text-lg text-gray-400">Reviews</p>
                                    <div></div>
                                </div>
                                <div className="flex gap-5  overflow-x-scroll w-full pb-3" ref={reviewScrollRef}>
                                {/* {movieDetails.reviews.map((review,index)=>(
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
                                ))} */}
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
                                    {formatDate(movieDetails.release_date)}
                                </h2>
                              </div>

                              <div className="flex gap-2 flex-col">
                                <div className='flex gap-2 items-center Manrope-Regular text-gray-300'>
                                    <HiLanguage />
                                    <p>Available Language</p>
                                </div>
                                <div className="Manrope-SemiBold text-white flex gap-2 text-sm">
                                    {movieDetails?.spoken_languages?.map((language, index)=>(
                                        <div key={index} className="bg-black rounded-md w-max p-1">
                                            <p >{language.english_name}</p>
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
                                    {/* {movieDetails.rating.map((rating, index)=>(
                                        <div key={index} className="bg-black rounded-md w-full ">
                                            <div  className='bg-black p-4 flex flex-col gap-2 rounded-md'>
                                                    <h3 className='Manrope-SemiBold'>{rating.name}</h3>
                                                    <Rating rating={rating.rating} />
                                            </div>
                                        </div>
                                    ))} */}
                                </div>
                              </div>

                              <div className="flex gap-2 flex-col">
                                <div className='flex gap-2 items-center Manrope-Regular text-gray-300'>
                                    <BiCollection />
                                    <p>Genres </p>
                                </div>
                                <div className="Manrope-SemiBold text-white flex gap-2 text-sm">
                                    {movieDetails?.genres?.map((genre, index)=>(
                                        <div key={index} className="bg-black rounded-md w-max p-1 ">
                                            <p >{genre.name}</p>
                                        </div>
                                    ))}
                                </div>
                              </div>

                              <div className="flex gap-2 flex-col">
                                <div className='flex gap-2 items-center Manrope-Regular text-gray-300'>
                                    <p>Director </p>
                                </div>
                                <div className="Manrope-SemiBold text-white flex gap-2 text-sm">
                                    {movieDetails.director && (
                                        <div className="bg-black rounded-md w-full p-2 flex gap-2 ">
                                        <img src={`${CAST_IMAGE_BASE_PATH}${movieDetails.director.profile_path}`} alt=""  className='w-12 h-12 rounded-sm'/>
                                        <div>
                                        <p className='text-sm Manrope-Regular'>{movieDetails.director.name}</p>
                                        {/* <p className='Manrope-Regular text-gray-400'>From India</p> */}
                                        </div>
                                    </div>
                                    )}
                                </div>
                              </div>

                              <div className="flex gap-2 flex-col">
                                <div className='flex gap-2 items-center Manrope-Regular text-gray-300'>
                                    <p>Music </p>
                                </div>
                                <div className="Manrope-SemiBold text-white flex gap-2 text-sm">
                                    {/* {movieDetails.music.map((music, index)=>(
                                        <div key={index} className="bg-black rounded-md w-full p-2 flex gap-2 ">
                                            <img src={music.image} alt=""  className='w-12 h-12'/>
                                            <div>
                                            <p className='text-sm Manrope-Regular'>{music.name}</p>
                                            <p className='Manrope-Regular text-gray-400'>From India</p>
                                            </div>
                                        </div>
                                    ))} */}
                                </div>
                              </div>

                            </div>
                    </div>
                </div>
            </section>
        </section>

        <section>
            {/* <FootAds pictures={pictures}/> */}
        </section>
    <Footer/>
    </section>
  );
}

export default MoviePage;
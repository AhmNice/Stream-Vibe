import React, { useEffect, useState } from 'react'
import Navbar from '../assets/components/Navbar'
import { useLocation } from 'react-router-dom'
import MovieCardAlt from '../assets/components/MovieCardAlt'
import { BeatLoader } from 'react-spinners';

const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmU3NTY1MmY4NWQ1NDZlNjNkZGFkZmU1MGU3NjU1YiIsIm5iZiI6MTc0MjE1MDY1MC40NTQwMDAyLCJzdWIiOiI2N2Q3MWJmYWViYzMwYTBiNDgwMTM3NmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.p2Y-AAKohHDKdSLyRFDKe52NMtBLu4Uc868VM2dIgxQ"; // Replace with actual TMDb API token
const API_KEY = '16e75652f85d546e63ddadfe50e7655b';
const POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/original/';

const GenrePage = () => {
  const [movieList, setMovieList] = useState([])
  const location = useLocation();
  const [loading, setLoading] = useState(false)
  const [error , setError] = useState(false)
  const [genres, setGenres] = useState([])

  // extracting queries from the url
  const genreId = new URLSearchParams(location.search).get('id');
  const top10 = new URLSearchParams(location.search).get('top') === 'true';
  const type = new URLSearchParams(location.search).get('type')
  // fetching movies or tv shows based on data from the url
  useEffect(()=>{
    if(!genreId) return
    const fetchMovieList = async ()=>{
      setLoading(true);
      try {
          const encodedQuery = encodeURIComponent(genreId);
          const response = await fetch(`${BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${encodedQuery}`,{
            method:'GET',
            headers:{
             "Authorization": `Bearer ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          });
          if(!response.ok) throw new Error('Failed to fetch data')
          const data = await response.json();
          const movies = data.results || [];

          const moviesWithRuntime = await Promise.all(
            movies.map(async(movie)=>{
              const detailsResponse = await fetch( `${BASE_URL}/${type}/${movie.id}?api_key=${API_KEY}`,{
                method: "GET",
                headers: {
                  Authorization: `Bearer ${API_TOKEN}`,
                  "Content-Type": "application/json",
                },
              });

              const detailsData = await detailsResponse.json()
              return{...movie, runtime: detailsData.runtime}
            })
          )
          setMovieList(moviesWithRuntime)
      } catch (error) {
        setError(true)
        setLoading(false)
      }finally{
        setLoading(false)
      }
    }
    fetchMovieList()
  },[genreId,type])
  // fetching genre lists
  useEffect(()=>{
      const fetchGenres = async () => {
        try {
          const movieGenre = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          });

          const data = await movieGenre.json();
          setGenres(data.genres || []); // Ensure it sets an array
        } catch (error) {
          console.error("Error fetching genres:", error);
        }
    }
    fetchGenres()
  },[])
  const filterGenre = genres.find(genre => genre.id.toString() === genreId);
  const movieType = type === 'tv'? true :false
  return (
    <section className="lg:w-screen h-full">
        <section className="w-full">
            <Navbar />
        </section>
        <section className='min-h-screen lg:px-20 px-8'>
         <div className="flex justify-between py-5 Manrope-SemiBold text-gray-300">
        {top10? (
          <p className='Manrope-Bold text-2xl '>Top Ten in {filterGenre ? filterGenre.name: 'UnknownGenre'} </p>
        ):(
           <p>Genre: {filterGenre ? filterGenre.name: 'UnknownGenre'}</p>
        )}
         <p className='text-xm w-[50%]'>Type: {type=== 'tv'? 'Tv Show': 'Movie'}</p>
         </div>
         {loading?
              ( <div className="absolute inset-0 flex items-center justify-center">
              <BeatLoader color="#E50000" size={20} />
            </div>): error ? (
              <div className="absolute inset-0 flex items-center justify-center text-red-500 text-sm">
              {error}
            </div>
            ) : (
              <div className='grid grid-cols-5 gap-5'>
                { top10 ? (
            movieList.slice(0,10).map((movie)=>(
              <MovieCardAlt movie={movie} isShow ={movieType}/>
            ))
          ):(
            movieList.map((movie)=>(
              <MovieCardAlt movie={movie} isShow = {movieType} />
            ))
          )}
              </div>
            )
          }
        </section>

    </section>
  )
}

export default GenrePage
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../assets/components/Navbar'
import Banner from '../assets/components/Banner';
import SliderControlB from '../assets/components/SliderControlB';
import SlideControl from '../assets/components/SlideControl';
import GenreCard from '../assets/components/GenreCard'
import { BeatLoader } from 'react-spinners';
import MovieCardAlt from '../assets/components/MovieCardAlt';
import FootAds from '../assets/components/FootAds';
import Footer from '../assets/components/Footer';
const BASE_URL = "https://api.themoviedb.org/3"
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmU3NTY1MmY4NWQ1NDZlNjNkZGFkZmU1MGU3NjU1YiIsIm5iZiI6MTc0MjE1MDY1MC40NTQwMDAyLCJzdWIiOiI2N2Q3MWJmYWViYzMwYTBiNDgwMTM3NmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.p2Y-AAKohHDKdSLyRFDKe52NMtBLu4Uc868VM2dIgxQ"; // Replace with actual TMDb API token
const API_KEY = '16e75652f85d546e63ddadfe50e7655b'

const Movies_ShowPage = () => {
  const topRatedBannerScroll = useRef(null);
  const genreScrollRef = useRef(null);
  const top10inScrollRef = useRef(null)
  const trendingMovieScroll = useRef(null)
  const [loading, setLoading] = useState(false)
  const [genreLoading, setGenreLoading] = useState(false)
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [newReleased, setNewReleased] = useState([])
  const [newReleasedShow, setNewReleasedSow] = useState([])
  const [trendingShow, setTrendingShow] = useState([])
  const [newReleasedLoading, setNewReleasedLoading] = useState(false)
  const [newReleasedShowLoading, setNewReleasedShowLoading] = useState(false)
  const [trendingShowLoading, setTrendingShowLoading] = useState(false)
  const newReleasedScrollRef = useRef(null)
  const showGenreScrollRef = useRef(null)
  const show10GenreScrollRef = useRef(null)
  const newShowScrollRef = useRef(null)
  const newReleasedShowScrollRef = useRef(null)

  // fetching trending movie
  useEffect(() => {
    const fetchTrendingMovie = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        const movies = data.results || [];

        // Fetch runtime for each movie
        const moviesWithRuntime = await Promise.all(
          movies.map(async (movie) => {
            const detailsResponse = await fetch(`${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}`, {
              method: "GET",
              headers: {
                Authorization: `Bearer ${API_TOKEN}`,
                "Content-Type": "application/json",
              },
            });
            const detailsData = await detailsResponse.json();
            return { ...movie, runtime: detailsData.runtime }; // Add runtime to movie object
          })
        );

        setTrendingMovie(moviesWithRuntime);
      } catch (error) {
        console.error(error, "error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovie();
  }, []);
  // fetching all genresArray
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setGenreLoading(true);
        const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setGenres(data.genres || []);
      } catch (error) {
        console.log(error, "error fetching data");
      } finally {
        setGenreLoading(false);
      }
    };
    fetchGenres();
  }, []);
  //fetching new released movies
  useEffect(()=>{
    const fetchNewReleased = async () => {
      try {
        setNewReleasedLoading(true)
        const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,{
          method: "GET",
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`,
                        "Content-Type": "application/json",
                    },
        })
        const data = await response.json() || []
        setNewReleased(data.results)
      } catch (error) {
        console.table(error, 'error fetching data')
      }finally{
        setNewReleasedLoading(false)
      }
    }
    fetchNewReleased()
  },[])
 // Fetching trending TV shows
useEffect(() => {
  const fetchTrendingTVShows = async () => {
    try {
      setTrendingShowLoading(true);
      const response = await fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      const shows = data.results || [];

      // Fetch number of seasons for each show
      const showsWithSeasons = await Promise.all(
        shows.map(async (show) => {
          const detailsResponse = await fetch(`${BASE_URL}/tv/${show.id}?api_key=${API_KEY}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          });

          const detailsData = await detailsResponse.json();
          return { ...show, number_of_seasons: detailsData.number_of_seasons };
        })
      );

      setTrendingShow(showsWithSeasons);
    } catch (error) {
      console.error(error, "Error fetching trending TV shows");
    } finally {
      setTrendingShowLoading(false);
    }
  };

  fetchTrendingTVShows();
}, []);
// fetching new TV shows
useEffect(()=>{
  const fetchNewReleased = async () => {
    try {
      setNewReleasedShowLoading(true)
      const response = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`,{
        method: "GET",
                  headers: {
                      Authorization: `Bearer ${API_TOKEN}`,
                      "Content-Type": "application/json",
                  },
      })
      const data = await response.json() || []
      setNewReleasedSow(data.results)
    } catch (error) {
      console.table(error, 'error fetching data')
    }finally{
      setNewReleasedShowLoading(false)
    }
  }
  fetchNewReleased()
},[])


//  const [itemsPerPage, setItemsPerPage] = useState(1);
//     useEffect(() => {
//         const updateItemsPerPage = () => {
//             setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
//         };
//         updateItemsPerPage();
//         window.addEventListener('resize', updateItemsPerPage);
//         return () => window.removeEventListener('resize', updateItemsPerPage);
//     }, []);


  return (
    <section className="lg:w-screen h-full">
       <section className='w-full'>
            <div className="w-screen lg:w-screen">
                <Navbar />
            </div>
        </section>

        <section className='p-4 w-screen lg:w-full lg:px-20 min-h-screen flex flex-col gap-12 justify-center'>
            <div className="top3PopularContainer flex justify-center w-[100%] lg:w-full relative h-[490px]  rounded-md">

                {/* scrollable movie list */}
                <div  ref={topRatedBannerScroll}  className="flex  overflow-x-auto snap-x snap-mandatory scroll-smooth w-screen h-full rounded-md ">
                      {loading ? (
                       <div className='m-auto'>
                         <BeatLoader color="#E50000" size={20}  />
                       </div>
                      ): (
                        trendingMovie.slice(0,8).map((movie)=>(
                          movie.poster_path ? (
                            <div key={movie.id} className="snap-center shrink-0 w-full">
                              <Banner movie={movie} />
                            </div>
                          ) : null
                        ))
                      )}
                </div>
                {/*  */}

                {/* Overlay & Controls */}
          <div className="containerOverlay w-full h-full rounded-md absolute left-0 top-0 flex justify-end flex-col py-4 ">
            <SliderControlB scrollRef={topRatedBannerScroll} />
          </div>
          {/*  */}
    </div>
{/* movie section */}
            <div className="movieContainer w-full  lg:w-full border lg:p-6 rounded relative flex flex-col gap-10 p-4" >
              <div className='px-4 py-2 rounded text-white absolute top-[-20px] bg-red w-max Manrope-Regular'>Movies</div>
{/* all genres categories cards */}
              <div className="genreSection flex flex-col gap-4">

                <div className="head grid lg:flex lg:justify-between items-center gap-2 ">
                  <h3 className='Manrope-Bold text-white text-2xl'>Our Genre</h3>
                  <SlideControl scrollRef={genreScrollRef}/>
                </div>

                <div ref={genreScrollRef} className="flex gap-2  overflow-x-auto snap-x snap-mandatory scroll-smooth">
                      {genreLoading? (
                      <div className='m-auto'>
                      <BeatLoader color="#E50000" size={20}  />
                    </div>
                      ):(
                        Array.isArray(genres) && genres.map((genre) => (
                          <GenreCard genreId={genre.id} title={genre.name} key={genre.id}  type={`movie`}/>
                        ))
                      )}
                </div>
              </div>

{/* all top 10 in genres categories cards */}
              <div className="genreSection flex flex-col gap-4">
                <div className="head grid gap-2 lg:flex justify-between items-center">
                  <h3 className='Manrope-Bold text-white text-2xl'>Popular Top 10 In Genres</h3>
                  <SlideControl scrollRef={top10inScrollRef}/>
                </div>

                <div ref={top10inScrollRef} className="flex gap-2  overflow-x-auto snap-x snap-mandatory scroll-smooth">
                      {genreLoading? (
                      <div className='m-auto'>
                      <BeatLoader color="#E50000" size={20}  />
                    </div>
                      ):(
                        Array.isArray(genres) && genres.map((genre) => (
                          <GenreCard genreId={genre.id} title={genre.name} key={genre.id} top={true} type={`movie`}/>
                        ))
                      )}
                </div>
              </div>
  {/* trending movies categories cards */}
              <div className="trendingMovieSection flex flex-col gap-4">
                <div className="head  gap-2 lg:flex justify-between items-center">
                    <h3 className='Manrope-Bold text-white text-2xl'>Trending Now</h3>
                    <SlideControl scrollRef={trendingMovieScroll}/>
                  </div>
                  <div ref={trendingMovieScroll} className="flex gap-2  overflow-x-auto snap-x snap-mandatory scroll-smooth">
                {loading ? (
                      <div className="flex justify-center items-center h-[50vh] w-full">
                        <BeatLoader color="#E50000" size={20} />
                      </div>
                    ) : (
                      trendingMovie.map((movies) => <MovieCardAlt key={movies.id} movie={movies} />)
                  )}
                </div>
              </div>

{/* new released categories cards */}
<div className="trendingMovieSection flex flex-col gap-4">
                <div className="head gap-2 lg:flex justify-between items-center">
                    <h3 className='Manrope-Bold text-white text-2xl'>New Release</h3>
                    <SlideControl scrollRef={newReleasedScrollRef}/>
                  </div>
                  <div ref={newReleasedScrollRef} className="flex gap-2  overflow-x-auto snap-x snap-mandatory scroll-smooth">
                {newReleasedLoading ? (
                      <div className="flex justify-center items-center h-[50vh] w-full">
                        <BeatLoader color="#E50000" size={20} />
                      </div>
                    ) : (
                      newReleased.map((movies) => <MovieCardAlt key={movies.id} movie={movies} isNew={true}/>)
                  )}
                </div>
  </div>


            </div>
{/* show section */}
            <div className='movieContainer w-full lg:w-full border p-6 rounded relative flex flex-col gap-10'>
              <div className='px-4 py-2 rounded text-white absolute top-[-20px] bg-red w-max Manrope-Regular'>shows</div>

{/* all  genres categories cards -- shows */}
              <div className="genreSection flex flex-col gap-4">
                <div className="head flex justify-between items-center">
                  <h3 className='Manrope-Bold text-white text-2xl'>Our Genres</h3>
                  <SlideControl scrollRef={showGenreScrollRef}/>
                </div>

                <div ref={showGenreScrollRef} className="flex gap-2  overflow-x-auto snap-x snap-mandatory scroll-smooth">
                      {genreLoading? (
                      <div className='m-auto'>
                      <BeatLoader color="#E50000" size={20}  />
                    </div>
                      ):(
                        Array.isArray(genres) && genres.map((genre) => (
                          <GenreCard genreId={genre.id} title={genre.name} key={genre.id} top={false} type={`tv`}/>
                        ))
                      )}
                </div>
              </div>
{/* all top 10 in genres categories cards -- shows */}
              <div className="genreSection flex flex-col gap-4">
                <div className="head flex justify-between items-center">
                  <h3 className='Manrope-Bold text-white text-2xl'>Popular Top 10 In Genres</h3>
                  <SlideControl scrollRef={show10GenreScrollRef}/>
                </div>

                <div ref={show10GenreScrollRef} className="flex gap-2  overflow-x-auto snap-x snap-mandatory scroll-smooth">
                      {genreLoading? (
                      <div className='m-auto'>
                      <BeatLoader color="#E50000" size={20}  />
                    </div>
                      ):(
                        Array.isArray(genres) && genres.map((genre) => (
                          <GenreCard genreId={genre.id} title={genre.name} key={genre.id} top={true} type={`tv`}/>
                        ))
                      )}
                </div>
              </div>
 {/* trending shows categories cards */}
 <div className="trendingMovieSection flex flex-col gap-4">
                <div className="head flex justify-between items-center">
                    <h3 className='Manrope-Bold text-white text-2xl'>Trending Now</h3>
                    <SlideControl scrollRef={newShowScrollRef}/>
                  </div>
                  <div ref={newShowScrollRef} className="flex gap-2  overflow-x-auto snap-x snap-mandatory scroll-smooth">
                {trendingShowLoading ? (
                      <div className="flex justify-center items-center h-[50vh] w-full">
                        <BeatLoader color="#E50000" size={20} />
                      </div>
                    ) : (
                      trendingShow.map((movies) => <MovieCardAlt key={movies.id} movie={movies} isShow={true}/>)
                  )}
                </div>
              </div>


            { /* new released show categories cards */}
<div className="trendingMovieSection flex flex-col gap-4">
                <div className="head flex justify-between items-center">
                    <h3 className='Manrope-Bold text-white text-2xl'>New Release</h3>
                    <SlideControl scrollRef={newReleasedShowScrollRef}/>
                  </div>
                  <div ref={newReleasedShowScrollRef} className="flex gap-2  overflow-x-auto snap-x snap-mandatory scroll-smooth">
                {newReleasedShowLoading ? (
                      <div className="flex justify-center items-center h-[50vh] w-full">
                        <BeatLoader color="#E50000" size={20} />
                      </div>
                    ) : (
                      newReleasedShow.map((movies) => <MovieCardAlt key={movies.id} movie={movies} isNew={false} isShow={true}/>)
                  )}
                </div>
  </div>
            </div>
        </section>







        <section className="footer ads">
                {/* <FootAds /> */}
        </section>
        <section className="footer">
                <Footer />
        </section>
    </section>
  )
}

export default Movies_ShowPage

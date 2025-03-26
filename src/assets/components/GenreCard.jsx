import React, { useEffect, useState } from 'react';
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmU3NTY1MmY4NWQ1NDZlNjNkZGFkZmU1MGU3NjU1YiIsIm5iZiI6MTc0MjE1MDY1MC40NTQwMDAyLCJzdWIiOiI2N2Q3MWJmYWViYzMwYTBiNDgwMTM3NmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.p2Y-AAKohHDKdSLyRFDKe52NMtBLu4Uc868VM2dIgxQ"; // Replace with actual TMDb API token
const API_KEY = '16e75652f85d546e63ddadfe50e7655b';
const POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/original/';

const CategoryCard = ({ genreId, title, top = false, type }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMovieByGenre = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `${BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genreId}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch movies");
        const data = await response.json();
        setMovies(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieByGenre();
  }, [genreId, type]); // Added `type` to dependencies

  if (!movies.length && !loading) return null; // Hide card if no data

  return (
    <div className="categoryCard  relative snap-center flex-shrink-0 w-64 h-80 md:w-56 md:h-64 border border-gray-700 rounded-md bg p-5 cursor-pointer overflow-hidden"
    onClick={()=>navigate(`/genre?id=${genreId}&top=${top}&type=${type}`)}
    >
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <BeatLoader color="#E50000" size={20} />
        </div>
      ) : error ? (
        <div className="absolute inset-0 flex items-center justify-center text-red-500 text-sm">
          {error}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2" >
          {movies.slice(0, 4).map(
            (movie) =>
              movie.poster_path && (
                <div key={movie.id} className="rounded-sm h-full">
                  <img src={`${POSTER_BASE_PATH}${movie.poster_path}`} alt={movie.title} className="rounded-sm" />
                </div>
              )
          )}
        </div>
      )}
      <div className="title absolute bottom-0 left-0 w-full p-4 text-white flex flex-col justify-between Manrope-SemiBold">
        {top && <div className="w-max bg-red px-2 py-1 rounded">Top 10 In</div>}
        <div className="flex justify-between items-center">
          <p>{title}</p>
          <HiOutlineArrowSmallRight />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

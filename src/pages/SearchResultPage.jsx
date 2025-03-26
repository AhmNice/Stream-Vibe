import React, { useEffect, useState } from "react";
import Navbar from "../assets/components/Navbar";
import MovieCard from "../assets/components/MovieCard";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmU3NTY1MmY4NWQ1NDZlNjNkZGFkZmU1MGU3NjU1YiIsIm5iZiI6MTc0MjE1MDY1MC40NTQwMDAyLCJzdWIiOiI2N2Q3MWJmYWViYzMwYTBiNDgwMTM3NmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.p2Y-AAKohHDKdSLyRFDKe52NMtBLu4Uc868VM2dIgxQ"; // Replace with actual TMDb API token

const SearchResultPage = () => {
    const [results, setResults] = useState([]);
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    // Extract query and type from URL
    const query = new URLSearchParams(location.search).get("q");
    const type = new URLSearchParams(location.search).get("t") || "movie"; // Default to "movie"

    useEffect(() => {
        if (!query) return; // Stop if there's no search query

        const fetchMovies = async () => {
            setLoading(true);
            try {
                const encodedQuery = encodeURIComponent(query);
                console.log("Fetching:", `${BASE_URL}/search/${type}?query=${encodedQuery}`);

                const response = await fetch(`${BASE_URL}/search/${type}?query=${encodedQuery}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${API_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) throw new Error("Failed to fetch data");

                const data = await response.json();
                console.log("API Response:", data);
                setResults(data.results || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [query, type]);



    return (
        <section className="lg:w-screen h-full">
            <section className="w-full">
                <Navbar />
            </section>
            <section className="results w-full flex flex-col text-center items-center py-8 p-4 lg:px-20 min-h-screen">
                <h4 className="Manrope-Bold text-white text-2xl text-center w-full">
                    Results For "{query}"
                </h4>
                {loading ? (
                    <p className="text-white Manrope-Regular">Loading...</p>
                ) : (
                    <section className="w-full grid grid-cols-2 lg:grid lg:grid-cols-5 gap-2 py-5">
                        {results.length > 0 ? (
                            results.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))
                        ) : (
                            <p className="text-white Manrope-Regular">No results found</p>
                        )}
                    </section>
                )}
            </section>
        </section>
    );
};

export default SearchResultPage;

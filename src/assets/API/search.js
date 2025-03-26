const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '16e75652f85d546e63ddadfe50e7655b';

/**
 * Search for movies, TV shows, or both.
 * @param {string} query - The search term.
 * @param {string} type - "movie", "tv", or "multi" (default: "multi").
 */
export async function searchTMDb(query, type = "multi") {
    if (!query) return []; // Prevent empty searches

    const response = await fetch(`${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results || []; // Return results or empty array
}
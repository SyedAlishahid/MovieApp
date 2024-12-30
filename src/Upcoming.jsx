import React, { useState, useEffect } from 'react';
import MovieCard from './Movie';

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUpcoming = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError('Failed to load movies. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  const loadMoreMovies = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="popular-movies bg-[#121212] py-10 px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mt-10">
        Upcoming
      </h2>
      {error && <p className="text-red-500 text-center text-xl mt-4">{error}</p>}
      {isLoading && (
        <div className="flex justify-center items-center text-white mt-6">
          <div className="loader bg-white p-2 rounded-full animate-spin"></div>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center mx-auto">
        {!isLoading &&
          !error &&
          movies.slice(0, visibleCount).map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      {visibleCount < movies.length && !isLoading && !error && (
        <div className="text-center mt-6">
          <button
            onClick={loadMoreMovies}
            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Upcoming;

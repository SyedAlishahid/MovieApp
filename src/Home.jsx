import React, { useEffect, useState } from "react";
import MovieCard from "./Movie";
import Slider from "react-slick";
import './loader.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '@mui/material/Rating';

const MovieGallery = () => {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";
      try {
        setError(null);
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const loadMoreMovies = () => {
    setVisibleCount(prevCount => prevCount + 10);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 4000,
    pauseOnHover: false, 
  };

  return (
    <div className="movie-gallery bg-cover bg-center py-10 px-4 sm:px-6 md:px-8 bg-[#121212] mt-10 lg:mt-12">
      <div className="slider mb-6">
        <Slider {...sliderSettings}>
          {movies.slice(0, 5).map(movie => (
            <div key={movie.id} className="slider-item bg-gray-800 rounded-lg">
              <div className="rounded w-full h-screen bg-cover" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="grid pt-[33rem] pl-10">
                  <p className="text-4xl font-bold">{movie.title}</p>
                  <p className="text-xl font-semibold">{movie.overview || "No overview available"}</p>
                  <p className="text-xl font-semibold">{`Release Date: ${movie.release_date || "No Additional Info available"}`}</p>
                  <Rating
                    name="movie-rating"
                    value={4.0}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-4">
          {movies.slice(0, 5).map((_, index) => (
            <span key={index} className="dot w-3 h-3 bg-white rounded-full mx-1"></span>
          ))}
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mt-20">Top <span className="text-gray-600">Movies</span></h2>

      {error && <p className="text-red-500 text-center text-4xl font-bold ">{error}</p>}
      {isLoading && (
        <div className="flex justify-center items-center text-white">
          <div className="loader bg-[#121212]"></div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 justify-items-center md:mr-54 lg:mr-36">
        {movies.slice(0, visibleCount).map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {visibleCount < movies.length && (
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
};

export default MovieGallery;

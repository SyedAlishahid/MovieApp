import React from "react";
import Rating from '@mui/material/Rating';

const MovieCard = ({ movie }) => {
   const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

   // Generate a random rating between 1 and 5
   const randomRating = Math.floor(Math.random() * 5) + 1;

   return (
      <div className="relative w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 text-center mt-10 mx-auto lg:ml-16 hover:scale-105 transition-transform duration-300">
         <img
            src={imageUrl}
            alt={movie.title}
            className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
         />
         <h3 className="text-lg sm:text-xl font-semibold text-white mt-5 mb-3 sm:mb-5 px-3 truncate">{movie.title}</h3>

         <div className="absolute inset-0  bg-black bg-opacity-50 opacity-0 hover:opacity-100 text-white p-3 transition-opacity duration-300 rounded-lg">
            <p className="text-sm mt-48">{movie.overview || "No overview available"}</p>
<p className="text-sm">{`Release Date: ${movie.release_date || "No Additional Info available"}`}</p>            {/* Random rating for each movie */}
            <Rating
               name="movie-rating"
               value={randomRating}
               precision={0.5}
               readOnly
            />
         </div>
      </div>
   );
};

export default MovieCard;

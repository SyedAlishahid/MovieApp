import React, { useState, useEffect } from 'react';

function Popular() {
  const [movies, setMovies] = useState([]); 

  const fetchPopular = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';
    try {
      const response = await fetch(url);
      const data = await response.json(); 
      setMovies(data.results);
      console.log(data.results);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}

export default Popular;

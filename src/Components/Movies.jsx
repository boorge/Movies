import React, { useEffect, useState } from "react";
import axios from "axios";
import Mov from './Mov';

function Movie() {
  // Function to fetch movies
  const getMovies = async () => {

    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=c0073bff&s=${moviename}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = res.data; // Correct the response handling
      console.log(data); // Log the fetched data
      setMovies(data.Search);
    } catch (error) {
      console.error("Error fetching movies:", error); // Log errors to the console
    }
  };

  // Use useEffect to call getMovies when the component mounts
  useEffect(() => {
    getMovies();
  }, []);


  const moviename = "Harry";

  const [movies, setMovies] = useState([]);

  return (
    <div className="home">
      {movies.map((el) => (
        <Mov el={el} />
      ))}
    </div>
  );
}

export default Movie;

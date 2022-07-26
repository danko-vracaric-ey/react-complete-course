import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchMoviesHandler() {
    try {
      setIsLoading(true);
      // fetch("https://swapi.dev/api/films")
      //   .then((res) => res.json())
      //   .then((data) => {

      const response = await fetch("https://swapi.dev/api/film");
      if (!response.ok) {
        throw new Error("Something is wrong");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });

      //   console.log(data.results);
      setMovies(transformedMovies);
      setIsLoading(false);
      // });
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Movies not found</p> && !error}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

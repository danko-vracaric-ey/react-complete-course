import React, { useCallback, useEffect, useState } from "react";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      // fetch("https://swapi.dev/api/films")
      //   .then((res) => res.json())
      //   .then((data) => {

      const response = await fetch(
        "https://react-http-664f9-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something is wrong");
      }
      const data = await response.json();
      console.log(data);
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      // const transformedMovies = data.results.map((movie) => {
      //   return {
      //     id: movie.episode_id,
      //     title: movie.title,
      //     openingText: movie.opening_crawl,
      //     releaseDate: movie.release_date,
      //   };
      // });

      //   console.log(data.results);
      setMovies(loadedMovies);
      setIsLoading(false);
      // });
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-http-664f9-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (isLoading) {
    content = <p>Loading..</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0}
        {!isLoading && movies.length === 0 && <p>Movies not found</p> && !error}
        {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>{error}</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;

import React, {useEffect, useState} from "react";
import { Container } from "semantic-ui-react";
import MovieCardList from "./MovieCardList"
import Search from "./Search"
import MovieForm from "./MovieForm"

function MovieInfo() {
  const [movies, setMovies] = useState([])
  const [movieSearch, setMovieSearch] = useState("")

  useEffect(() => {
    fetch(" http://localhost:3001/movies")
      .then((r) => r.json())
      .then(data => setMovies(data))
  }, [])

  const handleAddNewMovie = (addNewMovie) => {
    setMovies([...movies, addNewMovie])
  }

  const moviesRendered = movies.filter((movie) => {
    return movie.name.toLowerCase().includes(movieSearch.toLowerCase())
  })

  const handleDeleteClick = (id) => {
    const deleteMovie = movies.filter(movie => {
      return movie.id !== id
    })
    setMovies(deleteMovie)
  }

  return (
    <Container>
      <h1>Welcome to the Movie Review Page!</h1>
        <br />
      <MovieForm 
      onAddMovie={handleAddNewMovie}
      />
        <br />
      <Search 
      movieSearch={movieSearch}
      onChangeMovieSearch={setMovieSearch}
      />
        <br />
      <MovieCardList 
      movies={moviesRendered}
      onDeleteClick={handleDeleteClick}
      />
    </Container>
  )
}





export default MovieInfo;


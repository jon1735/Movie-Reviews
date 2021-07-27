import React from "react";
import { Card } from "semantic-ui-react";
import MovieCards from "./MovieCards"

function MovieCardList({ movies }) {
  const displayMovies = movies.map((movie) => (
    <MovieCards 
      key={movie.id}
      movies={movie}
    />
  ))

  return (
    <Card.Group itemsPerRow={3}>
      {displayMovies}
    </Card.Group>
  )





}



export default MovieCardList;
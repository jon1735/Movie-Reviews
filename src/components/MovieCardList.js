import React from "react";
import { Card } from "semantic-ui-react";
import MovieCards from "./MovieCards"

function MovieCardList({ movies, onDeleteClick }) {

  const handleDeleteClick = (id) => {
    onDeleteClick(id)
    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch(`http://localhost:3001/movies/${id}`, configObj)
  }

  return (
    <Card.Group itemsPerRow={3}>
      
        { movies.map( (movie) => 
          <MovieCards 
            key={movie.id}
            movies={movie}
            onDeleteClick={handleDeleteClick}
          />
        )}
    </Card.Group>
  )
}


export default MovieCardList;


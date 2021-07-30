import React from "react"
import { Card } from "semantic-ui-react";
import ReviewsCards from "./ReviewsCards"

function ReviewsList({ movies, onAddMovieReview }) {
  
    return (
    <Card.Group itemsPerRow={3} className="cards">
      { movies.map( (movie) => 
        <ReviewsCards
          key={movie.id}
          movies={movie}
          onAddMovieReview={onAddMovieReview}
        />
      )}
    </Card.Group>
  );
}

export default ReviewsList

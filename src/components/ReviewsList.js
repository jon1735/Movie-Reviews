import React from "react"
import { Card } from "semantic-ui-react";
import ReviewsCards from "./ReviewsCards"

function ReviewsList({ movies }) {
  


    return (
    <Card.Group itemsPerRow={3} className="cards">
      { movies.map( (movie) => 
        <ReviewsCards
          key={movie.id}
          movies={movie}
        />
      )}
    </Card.Group>
  );
}

export default ReviewsList

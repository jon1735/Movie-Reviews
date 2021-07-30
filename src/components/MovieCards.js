import React from "react"
import { Card } from "semantic-ui-react"

function MovieCards ({ movies, onDeleteClick }) {
  const { id, name, summary, image } = movies

  const handleDeleteClick = () => {
    onDeleteClick(id)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img src={image} alt={name} width="150" height="200"/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
          <div className="summary">Movie Summary: {summary}</div>
      </div>
      <button className="deleteButton" onClick={handleDeleteClick}>Delete</button>
    </Card>

  )
}

export default MovieCards

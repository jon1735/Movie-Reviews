import React from "react"

function Search ({ movieSearch, onChangeMovieSearch }) {
  const handleChange = (event) => {
    onChangeMovieSearch(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
        className="prompt"
        value={movieSearch}
        onChange={handleChange}
        />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search

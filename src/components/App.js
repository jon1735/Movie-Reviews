import React, {useEffect, useState} from "react";
import NavBar from "./NavBar"
import MovieInfo from "./MovieInfo"
import ReviewsList from "./ReviewsList"
import { Switch, Route } from "react-router-dom"

function App() {
  const [movies, setMovies] = useState([])
    useEffect(() => {
      fetch(" http://localhost:3001/movies")
        .then((r) => r.json())
        .then(data => setMovies(data))
    }, [])

//fucntion that handles the "updateMovie"... takes in updated movie and changes the state based on the change

    const updateMovieReview = () => {
      
    }


  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <MovieInfo 
          movies={movies}
          setMovies={setMovies}
          />
        </Route>
        <Route path="/reviews">
          <ReviewsList 
          movies={movies}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;



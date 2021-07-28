import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MovieInfo from "./components/MovieInfo";
import Reviews from "./components/Reviews"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch>
        <Route exact path="/">
          <MovieInfo />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
      </Switch>
    </Router> 
  </React.StrictMode>,
   document.getElementById("root"));

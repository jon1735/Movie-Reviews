# Phase 2 project: Movie Review CRUD App


## Setup 

All the Movie information can be found in the `db.json` file. We'll
be using `json-server` to create a RESTful API for our database.

Run `npm install` to install our dependencies.

Then, run `npm run server` to start up `json-server` on `http://localhost:3001`.

In another tab, run `npm start` to start up our React app at `http://localhost:3000`.


## Project Goals

- Create an index displaying Movie 'cards'
  - using a "GET" request, render each Movie name, and image on a card.
  - _When clicked_, the card should render the selected movie on the left hand side of the screen, displaying the Movie image, name, brief summary, and reviews beneath the card
- Allow users to search a Movie by its name in order to narrow down the cards
  shown on the page
- Using a "POST" request, wire up the form to add a movie specified by the end user.
- The end user should also be able to add an image, brief review, and summary of the  movie. 
- Using a "PATCH" request, the user should be able to modify the review or summary of the movie.
- using a "DELETE" request, the user should be able to delete an entire card, "entry" on the list.

## Project Requirements

- components using state and props
- re-renders based on client-side events
- can both get data from, post data to, patch data to, and delete data from the json server/database

## Trying to Figure Out Where to Start

This project has already been completed for the instructor to review. The reviewee should try adding a movie of their choice. If a movie can not be thought of, below this prompt i have added some data for the user to test the functionality of the application.



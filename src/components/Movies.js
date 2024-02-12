import React from "react";
import { movies } from "../data";
function Movies() {
  return <div>
  <h1>Movies Page</h1>
      {Movies.map((Movie, index) => (
        <div key={index}>
          <h2>{Movie.title}</h2>
          <p>Time: {Movie.time} minutes</p>
          <ul>
            {Movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
  
  </div>;
}

export default Movies;

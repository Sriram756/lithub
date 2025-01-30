import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUpcomingMovies } from "./Imdb"; // Import the hook
const Upcoming = () => {
  const movies = useUpcomingMovies(); // Use the custom hook

  return (
    <div className="mt-6">
      <h4
        className="py-10 text-3xl font-bold"
        style={{ textShadow: "4px 4px 2px rgba(0, 0, 0, 0.6)" }}
      >
        Trending tamil movies
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
        {movies.length > 0 ? (
          movies.map((movie, key) => (
            <div className="recImg" key={key}>
              {movie.id}
              <Link to={`/upcomingdetail/${movie.id}`}>
                <img src={movie.primaryImage} alt={movie.title} />
              </Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Upcoming;

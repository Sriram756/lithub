import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../feature/Movie/movieSlice";

const Trending = () => {
  const movies = useSelector(selectTrending);
  return (
    <div className="mt-6">
      <h4
        className="py-10 text-3xl font-bold "
        style={{ textShadow: "4px 4px 2px rgba(0, 0, 0, 0.6)" }}
      >
        Trending
      </h4>
      <div className=" grid grid-cols-2 gap-10 md:grid-cols-4">
        {movies &&
          movies.map((movie, key) => (
            <div className="recImg" key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title}></img>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trending;

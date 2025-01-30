import { useState, useEffect } from "react";

const url = "https://imdb236.p.rapidapi.com/imdb/india/trending-tamil";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "4100ffdd12msh7523d0687d24fc8p15920cjsn01c74e3058a3",
    "x-rapidapi-host": "imdb236.p.rapidapi.com",
  },
};

export const useUpcomingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        
        setMovies(data || []); // Ensure data is an array
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return movies;
};


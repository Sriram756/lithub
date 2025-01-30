import { useState, useEffect } from "react";


const url =
  "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c2b8cd27d6msh5c0c5763542591ep107a80jsne98fdb14d5fe",
    "x-rapidapi-host": "anime-db.p.rapidapi.com",
  },
};

export const useAnime = () => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setAnimeData(data.data || []);
        console.log("ani",data.data);
      })
      .catch((err) => console.log("fetching anime", err))
  }, []);
  return animeData;
}

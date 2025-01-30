import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useUpcomingMovies } from "./Imdb";

const UpcomeDetail = () => {
  const { id } = useParams();
  const movies = useUpcomingMovies();
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    // Find the movie by ID from the fetched movie list
    const selectedMovie = movies.find((movie) => movie.id === id);
    if (selectedMovie) {
      setDetailData(selectedMovie);
    }
  }, [id, movies]);

  if (!detailData) {
    return <p className="text-center text-white text-2xl">Loading...</p>;
  }

  return (
    <div className="relative h-screen overflow-x-hidden block">
      <div className="left-0 right-0 fixed -z-10">
        {detailData.primaryImage && (
          <img
            alt={detailData.primaryTitle}
            src={detailData.primaryImage}
            className="w-full h-screen object-cover  opacity-60"
          />
        )}
      </div>
      <Link to="/home">
        <img
          src="/Images/back.svg"
          alt="Back"
          className="border-4 w-12 h-12 relative top-10 ml-10 bg-slate-400 opacity-80 hover:opacity-100 border-slate-50 rounded-full cursor-pointer"
        />
      </Link>

      <div className="relative px-10 top-1/4 flex items-center mx-0 my-auto z-10 justify-start min-h-40 w-full pb-6">
        <h1 className="text-4xl md:text-7xl font-bold text-gray-300 text-stroke">
          {detailData.primaryTitle}
        </h1>
      </div>
      <div className="max-w-[800px] ml-9 top-1/4 relative">
        <div className="flex items-center mb-5 flex-row flex-nowrap min-h-12 mx-6 gap-6">
          <button className="size-20 w-fit rounded-lg px-6 h-12 md:h-16 flex flex-row items-center border-4 border-white-500 cursor-pointer justify-center tracking-wide text-center uppercase bg-black hover:bg-slate-900">
            <img
              src="/Images/play-icon-white-png-4.jpg"
              alt="Play"
              className="w-8"
            />
            <span>Play</span>
          </button>
          <a className="size-20 w-fit rounded-lg px-6 h-12 md:h-16 flex flex-row items-center cursor-pointer justify-center tracking-wide text-center border-2 border-white-500 uppercase opacity-80 bg-gray-700 hover:bg-slate-900">
            <img
              src="/Images/play-icon-white-png-4.jpg"
              alt="Trailer"
              className="w-8"
            />
            <span>Trailer</span>
          </a>
          <div className="flex flex-row">
            <img
              src="/Images/icons8-plus.svg"
              alt="Add to List"
              className="border-4 bg-slate-400 opacity-80 hover:opacity-100 border-slate-50 rounded-full cursor-pointer"
            />
          </div>
        </div>
        <div className="font-medium text-lg text-amber-400 md:text-xl min-h-5">
          {detailData.genres?.join(", ") || "No Subtitle Available"}
        </div>
        <div className="font-bold text-black w-full sm-text-stroke text-base md:text-2xl p-3">
          {detailData.description || "No Description Available"}
        </div>
      </div>
    </div>
  );
};

export default UpcomeDetail;

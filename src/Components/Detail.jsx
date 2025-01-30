import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDocRef = doc(db, "Movies", id);
        const movieDoc = await getDoc(movieDocRef);

        if (movieDoc.exists()) {
          setDetailData(movieDoc.data());
          setLoading(false);
        } else {
          console.error("No such document exists!");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching document:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center text-white text-2xl">Loading...</p>;
  }

  return (
    <div className="relative h-screen overflow-x-hidden block">
      <div className="left-0 right-0 fixed -z-10">
        {detailData.backgroundImg && (
          <img
            alt={detailData.title}
            src={detailData.backgroundImg}
            className="w-full h-screen object-cover opacity-60"
          />
        )}
      </div>
      <Link to="/home">
        <img
          src="/Images/back.svg"
          alt="Add to List"
          className="border-4 w-12 h-12 relative top-10 ml-10 bg-slate-400 opacity-80 hover:opacity-100 border-slate-50 rounded-full cursor-pointer"
        />
      </Link>

      <div className="relative px-10 top-1/4 flex items-center mx-0 my-auto z-10 justify-start min-h-40 w-full pb-6">
        {detailData.title && (
          <h1 className=" text-4xl md:text-7xl font-bold text-gray-300 text-stroke ">
            {detailData.title}
          </h1>
        )}
      </div>
      <div className="max-w-[800px] ml-9 top-1/4 relative">
        <div className="flex items-center mb-5 flex-row flex-nowrap min-h-12 mx-6 gap-6">
          <button className="size-20 w-fit rounded-lg px-6 h-12 md:h-16 flex flex-row items-center border-4 border-white-500 cursor-pointer justify-center tracking-wide text-center uppercase  bg-black hover:bg-slate-900">
            <img
              src="/Images/play-icon-white-png-4.jpg"
              alt="Play"
              className="w-8"
            />
            <span>Play</span>
          </button>
          <button className="size-20 w-fit rounded-lg px-6 h-12 md:h-16 flex flex-row items-center cursor-pointer justify-center tracking-wide text-center border-2 border-white-500 uppercase opacity-80 bg-gray-700 hover:bg-slate-900">
            <img
              src="/Images/play-icon-white-png-4.jpg"
              alt="Trailer"
              className="w-8"
            />
            <span>Trailer</span>
          </button>
          <button>
            <img
              src="/Images/icons8-plus.svg"
              alt="Add to List"
              className="border-4 bg-slate-400 opacity-80 hover:opacity-100 border-slate-50 rounded-full cursor-pointer"
            />
          </button>
        </div>
        <div className="font-medium text-lg text-amber-400 md:text-xl min-h-5">
          {detailData.subTitle || "No Subtitle Available"}
        </div>
        <div className="font-bold text-black w-full sm-text-stroke text-base md:text-2xl p-3">
          {detailData.description || "No Description Available"}
        </div>
      </div>
    </div>
  );
};

export default Detail;

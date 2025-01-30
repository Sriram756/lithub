import React from "react";
import ImgSlider from "./ImgSlider";
import Viewer from "./Viewer";
import Recommends from "./Recommends";
import Originals from "./Originals";
import Trending from "./Trending";
import Upcoming from "./Upcoming";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../feature/Movie/movieSlice";
import { SelectUserName } from "../feature/user/userSlice";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import NewArrivals from "./NewArrivals";
import Header from "./Header";
import AnimeCards from "./AnimeCards";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(SelectUserName);

  const fetchMovies = () => {
    const moviesCollection = collection(db, "Movies");

    onSnapshot(moviesCollection, (snapshot) => {
      let recommends = [];
      let originals = [];
      let newArrivals = [];
      let trendings = [];

      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newArrivals = [...newArrivals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          original: originals,
          newArrival: newArrivals,
          trending: trendings,
        })
      );
    });
  };

  useEffect(() => {
    fetchMovies();
  }, [userName]);

  return (
    <main
      className=" mt-20 overflow-x-hidden block bg-gradient-to-b from-slate-600 top-24 to-slate-500 px-5 -z-10 "
      style={{ padding: "0 calc(3.5vw + 5px)" }}
    >
      <Header />
      <ImgSlider />
      <Viewer />
      <Upcoming />
      <Recommends />
      <NewArrivals />
      <Trending />
      <Originals />
      <AnimeCards />
    </main>
  );
};

export default Home;

import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  SelectUserName,
  SelectUserEmail,
  SelectUserPhoto,
  setSignOutState,
} from "../feature/user/userSlice";
const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userPhoto = useSelector(SelectUserPhoto);
  const userName = useSelector(SelectUserName);

  const handle = () => {
    // if (!userName) {
    //   const provider = new GoogleAuthProvider();
    //   signInWithPopup(auth, provider)
    //     .then((result) => {
    //       const user = result.user; // Get the user object from the result
    //       setUser(user); // Pass the user object to setUser
    //       console.log(user);
    //     })
    //     .catch((error) => {
    //       alert(error.message);
    //     });
    // } else {
    auth
      .signOut()
      .then(() => {
        dispatch(setSignOutState());
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
    // }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-black flex justify-between items-center px-5 z-50 h-[80px] pointer-events-auto">
      <img
        src="Images/Lit_Hub.png"
        alt="Lit Hub Logo"
        className="p-0 w-20 mt-1 inline-block"
      />

      <>
        <div className="md:flex flex-row  flex-nowrap m-0 p-0 mr-auto ">
          <Link
            to="/subscribe"
            className="bg-orange-600 ml-6 flex flex-row rounded-md pb-1 px-2"
          >
            <img
              src="/Images/icons8-star-48.png"
              alt="Home Icon"
              className="h-8 "
            />{" "}
            <h2 className="text-2xl text-center">subscribe</h2>
          </Link>
          <a
            href="/home"
            className="md:flex ml-4 gap-2 items-center px-5 hidden"
          >
            <img
              src="/Images/icons8-home.svg"
              alt="Home Icon"
              className="h-8 "
            />
            <h2 className="text-center">Home</h2>
          </a>

          <a
            href="/watchlist"
            className="md:flex flex-row gap-2 items-center px-5 cursor-pointer hidden"
          >
            <img
              src="/Images/icons8-plus.svg"
              alt="Home Icon"
              className="h-8 bg-white rounded-2xl"
            />
            <h2 className="text-center">watchlist</h2>
          </a>
        </div>
        <div className="relative  flex flex-row gap-3 justify-center items-center">
          <img
            src={userPhoto}
            alt="profile"
            className="rounded-3xl w-[50px] h-[50px]"
          />
          <button
            className="text-black hover:text-white  bg-red-500 rounded-md  duration-200  pointer-events-auto border-red-50 p-2  "
            onClick={handle}
          >
            signOut
          </button>
        </div>
      </>
    </div>
  );
};

export default Header;

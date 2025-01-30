import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="overflow-hidden flex flex-col text-center h-screen">
        <div className=" relative w-full h-full px-10 py-20 min-h-screen box-border flex flex-col justify-center items-center ">
          <div className="flex  flex-wrap flex-col max-w-[500px] justify-center items-center   mt-[-60px] mr-auto ml-auto text-center ">
            <img
              src="Images/Lit_Hub.png"
              alt=""
              className="mb-3  max-w-[400px] w-full min-h-1 block"
            />
            <Link
              to="/signin"
              className="font-bold mb-3  bottom-[-10px] bg-blue-500 hover:bg-blue-800 cursor-pointer p-4 -tracking-wider text-lg rounded-md w-full"
            >
              GET ALL THERE
            </Link>
          </div>
          <div className="h-full absolute opacity-20 bg-[url('../public/Images/MovieBg.jpg')] -z-10  top-0 right-0 left-0 bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;

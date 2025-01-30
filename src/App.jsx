import "./App.css";
import React from "react";
import UpcomeDetail from "./Components/UpcomeDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Detail from "./Components/Detail";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import SubscribePage from "./Components/SubscribePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/home" element={<Home />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/upcomingdetail/:id" element={<UpcomeDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

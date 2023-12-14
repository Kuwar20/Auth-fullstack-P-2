import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // app.js and home.js are in the same folder
import About from "./pages/About"; // app.js and home.js are in the same folder
import SignIn from "./pages/SignIn"; // app.js and home.js are in the same folder
import SignUp from "./pages/SignUp"; // app.js and home.js are in the same folder
import Profile from "./pages/Profile"; // app.js and home.js are in the same folder

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

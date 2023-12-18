import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // app.js and home.js are in the same folder
import About from "./pages/About"; // app.js and home.js are in the same folder
import SignIn from "./pages/SignIn"; // app.js and home.js are in the same folder
import SignUp from "./pages/SignUp"; // app.js and home.js are in the same folder
import Profile from "./pages/Profile"; // app.js and home.js are in the same folder
import Header from "./components/Header/Header"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />} > 
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// profile is a private route, as it is wrapped in a private route component

export default App;

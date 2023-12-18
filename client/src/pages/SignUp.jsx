import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // for the loading spinner effect
  const navigate = useNavigate();  // this is for redirecting the user to the home page after signing in

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // the fetch below will give the CORS error because we are trying to connect to the backend (port: 3000) from the frontend (port: 5173). To fix this, we need to add a proxy in the package.json file in the client folder or change vite.config.js proxy. The proxy will tell the frontend to connect to the backend.
    // const response = await fetch("http://localhost:3000/api/auth/signup", formData); // here we are connecting to the backend. when we submit the form, we are sending the data to the backend
    // after adding the proxy in vite.config.js, we can remove the localhost:3000 from the fetch below and we are free from cors issues

    try {
      setLoading(true); // when we submit the form, we want to show the loading spinner
      setError(false);
      // this is equivalent to the post request we do in postman, where we provide the url, method ( post here ), and body (data in json format)
      const response = await fetch("/api/auth/signup", {
        method: "POST", // we need to specify the method because by default it is GET, and our signup route is POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // we need to convert the formData to json to be able to send it to the backend
      }); // here we are connecting to the backend. when we submit the form, we are sending the data to the backend
      const data = await response.json(); // we need to convert the response from the backend to json to be able to read it.
      //console.log(data);{message: "User created successfully"}
      setLoading(false); // when we get the response from the backend, we want to hide the loading spinner
      if (data.success === false) {
        setError(true); // if we get a response from the backend, we want to hide the error message
        return;
      }
      navigate('/sign-in'); // if everything goes well, we want to redirect the user to the sign in page
    } catch (error) {
      setLoading(false); // but if we get an error, we want to hide the loading spinner
      setError(true); // and show the error message
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5 ">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error && "Something went wrong!"}</p>
    </div>
  );
};

export default SignUp;

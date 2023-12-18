import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

const Header = () => {
  const {currentUser} = useSelector((state) => state.user);
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-2xl">Auth App</h1>
        </Link>
        <ul className="flex gap-5 text-lg">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? ( <img src={currentUser.profilePicture} alt="profile" className="h-8 w-8 rounded-full object-cover " /> ):(<li>SignIn</li>)}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

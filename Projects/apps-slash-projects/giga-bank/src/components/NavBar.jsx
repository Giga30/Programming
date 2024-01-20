import React from "react"
import { Link } from "react-router-dom";

function NavBar(){
    return (
      <nav className="w-screen h-20 bg-black bg-opacity-25 absolute top-0 flex justify-between items-center box-border p-5">
        <h3 className="text-white text-2xl">GIGA BANK</h3>
        <div className="flex flex-col sm:flex-row">
          <Link to="login" className="text-white bg-black bg-opacity-45 rounded-lg hover:scale-105 duration-150 w-20 hover:shadow-lg shadow-md text-xs h-6 flex justify-center items-center sm:h-9 sm:text-sm mr-2">Log In</Link>
          <Link to="signup" className="text-white bg-black bg-opacity-45 rounded-lg hover:scale-105 duration-150 w-20 hover:shadow-lg shadow-md text-xs h-6 flex justify-center items-center sm:h-9 sm:text-sm mt-1 sm:mt-0">Sign Up</Link>
        </div>
      </nav>
    );
}

export default NavBar;
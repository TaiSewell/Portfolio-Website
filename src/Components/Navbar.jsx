import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <style>
        {`
          .nav-link {
            position: relative;
            padding-bottom: 2px;
          }
          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: #22c55e;
            transition: width 0.3s ease-in-out;
          }
          .nav-link:hover::after {
            width: 100%;
          }
        `}
      </style>

    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 shadow-lg z-50">
            {/* Left side: Links */}
            <div className="flex space-x-6 md:space-x-8 lg:space-x-10">
                <a href="#projects" className="relative pb-1 hover:text-green-500 transition before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-green-500 before:transition-all before:duration-300 hover:before:w-full">Projects</a>
                <a href="#education" className="relative pb-1 hover:text-green-500 transition before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-green-500 before:transition-all before:duration-300 hover:before:w-full">Education</a>
                <a href="#experience" className="relative pb-1 hover:text-green-500 transition before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-green-500 before:transition-all before:duration-300 hover:before:w-full">Experience</a>
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link to={"/"}>
                    <img
                        src={"/Initials Logo.png"} 
                        alt="Logo" 
                        className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
                    />
                </Link>
            </div>
        </nav>
    </>
  );
}

export default Navbar;
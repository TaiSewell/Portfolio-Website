/************************************************
 * Developer: Tai Sewell
 * File: Navbar.jsx
 * Description: This file holds the funtion Navbar()
   this function is used to display the navbar on
   the portfolio page.
 ***********************************************/

import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white flex items-center justify-between px-6 md:px-12 py-4 shadow-lg z-50">
        
        {/* Left: Links */}
        <div className="flex space-x-6 md:space-x-8">
            <a href="#projects" className="relative pb-1 hover:text-green-500 transition before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-green-500 before:transition-all before:duration-300 hover:before:w-full text-base sm:text-lg md:text-xl">Projects</a>
            <a href="#education" className="relative pb-1 hover:text-green-500 transition before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-green-500 before:transition-all before:duration-300 hover:before:w-full text-base sm:text-lg md:text-xl">Education</a>
            <a href="#experience" className="relative pb-1 hover:text-green-500 transition before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-green-500 before:transition-all before:duration-300 hover:before:w-full text-base sm:text-lg md:text-xl">Experience</a>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
            <img
                src={"/Initials Logo.png"}
                alt="Logo"
                className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
            />
            </Link>
        </div>

        {/* Right: Resume */}
        <div className="flex items-center space-x-4">
            <a
                href="/SWE WP Resume - 8.6.25.pdf"
                download
                className="relative text-white font-semibold md: text-xl transition hover:text-green-400 
                        before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
                        before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full"
            >
            Resume
            </a>
        </div>
        </nav>
    );
}
export default Navbar;
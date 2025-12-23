/************************************************
 * Developer: Tai Sewell
 * File: Navbar.jsx
 * Description: This file holds the funtion Navbar()
   this function is used to display the navbar on
   the portfolio page.
 ***********************************************/

import React, {useState} from "react";
import { Link } from "react-router-dom";

/*************************************************** 
 * Function: Navbar()
 * Description: This function is what allows for my
   Navbar to be displayed.
 * Return: returns the Navbar with section ID links
   and a resume downloader.
***************************************************/
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
        <nav className="bg-black/90 backdrop-blur-md text-white shadow-lg">
            <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
            {/* Mobile: hamburger (hidden on md+) */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Toggle menu"
                aria-controls="mobile-nav"
                aria-expanded={open}
            >
                <span className="sr-only">Open menu</span>
                <div className="space-y-1.5">
                <span className="block h-0.5 w-6 bg-white"></span>
                <span className="block h-0.5 w-6 bg-white"></span>
                <span className="block h-0.5 w-6 bg-white"></span>
                </div>
            </button>

            {/* Left: Links (desktop only) */}
            <div className="hidden md:flex space-x-6 md:space-x-8">
                <a href="#projects" className="relative pb-1 hover:text-green-500 transition before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-green-500 before:transition-all before:duration-300 hover:before:w-full text-xl">Projects</a>
                <a href="#education" className="relative pb-1 hover:text-green-500 transition before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-green-500 before:transition-all before:duration-300 hover:before:w-full text-xl">Education</a>
                <a href="#experience" className="relative pb-1 hover:text-green-500 transition before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-green-500 before:transition-all before:duration-300 hover:before:w-full text-xl">Experience</a>
            </div>

            {/* Center: Logo (unchanged for desktop) */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link to="/">
                <img
                    src={"/Initials Logo.png"}
                    alt="Logo"
                    className="h-12 w-12 md:h-12 md:w-12 lg:h-16 lg:w-16 object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                />
                </Link>
            </div>

            {/* Right: Resume (desktop only) */}
            <div className="hidden md:flex items-center space-x-4">
                <a
                href="/SWE WP Resume - 8.14.25.pdf"
                download
                className="relative text-white font-semibold text-xl transition hover:text-green-400 
                            before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
                            before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full"
                >
                Resume
                </a>
            </div>
            </div>

            {/* Mobile slide-down panel */}
            <div
            id="mobile-nav"
            className={`md:hidden border-t border-white/10 overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}
            >
            <div className="px-6 py-3 flex flex-col">
                <a
                href="#projects"
                onClick={closeMenu}
                className="py-3 text-base hover:text-green-400"
                >
                Projects
                </a>
                <a
                href="#education"
                onClick={closeMenu}
                className="py-3 text-base hover:text-green-400"
                >
                Education
                </a>
                <a
                href="#experience"
                onClick={closeMenu}
                className="py-3 text-base hover:text-green-400"
                >
                Experience
                </a>
                <a
                href="/SWE Intern Resume - 12.18.25.pdf"
                download
                onClick={closeMenu}
                className="mt-2 py-3 text-base hover:text-green-400"
                >
                Resume
                </a>
            </div>
            </div>
        </nav>

        {/* Spacer so content isn't hidden under fixed navbar */}
        <div className="h-[64px] md:h-[80px]" />
        </header>
    );
};

export default Navbar;
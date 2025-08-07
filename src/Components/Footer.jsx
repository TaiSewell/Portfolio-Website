/************************************************
 * Developer: Tai Sewell
 * File: Footer.jsx
 * Description: This file holds the function Footer()
   this function is used to display the footer on the
   Portfolio Page.
 ***********************************************/


import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-10 px-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            
            {/* Left: Name or Logo */}
            <div className="text-lg font-semibold text-white">
                <img src="/Initials Logo.png" alt="TS Logo" className="w-12 h-12 mx-auto" />
            </div>

            {/* Center: Navigation Links (optional) */}
            <div className="flex space-x-6">
            <a href="#projects" className="hover:text-green-400 transition">Projects</a>
            <a href="#education" className="hover:text-green-400 transition">Education</a>
            <a href="#experience" className="hover:text-green-400 transition">Experience</a>
            <a href="#contact" className="hover:text-green-400 transition">Contact</a>
            </div>

            {/* Right: Social Icons */}
            <div className="flex space-x-6 text-2xl">
            <a
                href="https://github.com/TaiSewell"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-transform transform hover:scale-110"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/tai-sewell-9bbb90271/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-transform transform hover:scale-110"
            >
                <FaLinkedin />
            </a>
            </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="text-center text-sm text-gray-500 mt-6">
            © {new Date().getFullYear()} Tai Sewell. All rights reserved.
        </div>
        </footer>
    );
};

export default Footer;
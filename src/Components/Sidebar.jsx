import React from "react";

function Sidebar() {
    return (
        <nav className="fixed top-0 left-0 h-full w-48 bg-[#111] text-white flex flex-col items-start p-6 space-y-6 shadow-lg z-50">
            <a href="#projects" className="hover:text-green-500 transition">Projects</a>
            <a href="#education" className="hover:text-green-500 transition">Education</a>
            <a href="#experience" className="hover:text-green-500 transition">Experience</a>
        </nav>

    );
}

export default Sidebar;
/************************************************
 * Developer: Tai Sewell
 * File: Home.jsx
 * Description: This file holds the funtion Home()
   this function is used to display the home page
   when imported into App.jsx
 ***********************************************/
import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import profilePic from '/assets/Profile.jpg';
import IntroLoader from "/Components/IntroLoader";

/************************************************
 * Function: Home()
 * Description: This function is used to load the home
   page for my website.
 ***********************************************/
function Home() {
    {/* Loading Screen */}
    const [showLoader] = useState(() => {
        return !sessionStorage.getItem("visited");
    });
   useEffect(() => {
    if (showLoader) {
      sessionStorage.setItem("visited", "true");
    }
  }, [showLoader]);
  
    {/* Spotlight */}
    const containerRef = useRef(null);
    const [mouse, setMouse] = useState({x:0, y:0});
    const[smoothedMouse, setSmoothedMouse] = useState({x:0, y:0});

    // Capture actual mouse position within the container
    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // Animate smooth transition
    useEffect(() => {
        let animationFrame;
        const smooth = () => {
        setSmoothedMouse((prev) => {
            const dx = mouse.x - prev.x;
            const dy = mouse.y - prev.y;
            return {
            x: prev.x + dx * 0.5,
            y: prev.y + dy * 0.5,
            };
        });
        animationFrame = requestAnimationFrame(smooth);
        };
        smooth();
        return () => cancelAnimationFrame(animationFrame);
    }, [mouse]);

    return (
        <div className="relative">
            {showLoader && <IntroLoader initials="TS" minDuration={1100} />}
        
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-screen bg-black text-white overflow-hidden"
            >
            {/* Smooth spotlight background */}
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                background: `radial-gradient(circle at ${smoothedMouse.x}px ${smoothedMouse.y}px, rgba(255, 255, 255, 0.1), transparent 400px)`
                }}
        />

        {/* Main Content */}
        <div className="text-center">
            <img src="/Initials Logo.png" alt="TS Logo" className="w-20 h-20 mx-auto" />
        </div>
        <div className="relative z-10 min-h-screen flex items-center justify-center px-8 pt-6 pb-24">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Intro Text Section */}
            <div>
                <h1 className="text-6xl lg:text-7xl font-extrabold text-green-400 mb-6 leading-tight">
                    Hello, my name is Tai Sewell
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                    I'm a passionate Software Development student at Austin Community College. I enjoy creating
                    applications of all kinds, from simple tools to full-stack applications. With a background in 
                    athletics as well, I bring adaptability, teamwork, and technical skill to every project I take on.
                </p>
                <Link to="/portfolio">
                    <button className="bg-green-500 hover:bg-green-600 text-black text-lg px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 hover:shadow-lg duration-300">
                        View My Work
                    </button>
                </Link>
                <div className="flex space-x-6 mt-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/TaiSewell"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-400 text-4xl transition-transform transform hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                     {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/tai-sewell-9bbb90271/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-400 text-4xl transition-transform transform hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        
            {/* Image Section */}
            <div>
                <img
                    src={profilePic}
                    alt="Profile"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] object-cover rounded-2xl border-4 border-white shadow-lg mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                />
            </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Home;
/************************************************
 * Developer: Tai Sewell
 * File: Home.jsx
 * Description: This file holds the funtion Home()
   this function is used to display the home page
   when imported into App.jsx
 ***********************************************/
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';

function Home() {
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
        <div className="relative z-10 h-full flex items-center justify-center px-8">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Intro Text Section */}
            <div>
                <h1 className="text-5xl font-bold text-green-400 mb-4">
                    Hello, my name is Tai Sewell
                </h1>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    I'm a passionate Software Development student at Austin Community College. I enjoy creating
                    applications of all kinds, from simple tools to full-stack applications. With a background in 
                    athletics as well, I bring adaptability, teamwork, and technical skill to every project I take on.
                </p>
                <Link to="/portfolio">
                    <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg duration-300">
                        View My Work
                    </button>
                </Link>
            </div>

            {/* Image Section */}
            <div>
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-lg border-4 border-white shadow-lg mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                />
            </div>
            </div>
        </div>
        </div>
    );
}

export default Home;
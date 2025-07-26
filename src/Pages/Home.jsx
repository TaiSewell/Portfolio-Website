/************************************************
 * Developer: Tai Sewell
 * File: Home.jsx
 * Description: This file holds the funtion Home()
   this function is used to display the home page
   when imported into App.jsx
 ***********************************************/
import { useState, useEffect, useRef } from "react";
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
                background: `radial-gradient(circle at ${smoothedMouse.x}px ${smoothedMouse.y}px, rgba(255, 255, 255, 0.2), transparent 160px)`
                }}
        />

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-8">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Intro Text Section */}
            <div>
                <h1 className="text-5xl font-bold text-green-400 mb-4">
                    Hi, my name is Tai Sewell
                </h1>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    I'm a passionate Software Development student at Austin Community College. I enjoy creating
                    applications of all kinds, from simple tools to full-stack applications that solve real-world problems.
                    With a background in athletics as well, I bring adaptability, teamwork, and technical skill to every project I take on.
                </p>
                <a href="/portfolio">
                <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-lg font-semibold transition-all">
                    View My Work
                </button>
                </a>
            </div>

            {/* Image Section */}
            <div>
                <img
                src={profilePic}
                alt="Profile"
                className="w-65 h-65 object-cover rounded-full shadow-lg mx-auto"
                />
            </div>
            </div>
        </div>
        </div>
    );
}

export default Home;
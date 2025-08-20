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
import profilePic from '/Profile.jpg';
import IntroLoader from "../Components/IntroLoader";

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
  
    // Spotlight (only animates on md+ for mobile perf)
    const containerRef = useRef(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [smoothedMouse, setSmoothedMouse] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    useEffect(() => {
        let raf;
        const smooth = () => {
        setSmoothedMouse((prev) => {
            const dx = mouse.x - prev.x;
            const dy = mouse.y - prev.y;
            return { x: prev.x + dx * 0.5, y: prev.y + dy * 0.5 };
        });
        raf = requestAnimationFrame(smooth);
        };
        smooth();
        return () => cancelAnimationFrame(raf);
    }, [mouse]);

    return (
        <div className="relative">
        {showLoader && <IntroLoader initials="TS" minDuration={1100} />}

        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[100svh] bg-black text-white overflow-hidden pt-[64px] md:pt-[80px]"
        >
            {/* Mobile static vignette (battery-friendly) */}
            <div
            aria-hidden="true"
            className="absolute inset-0 md:hidden"
            style={{
                background:
                "radial-gradient(60% 40% at 50% 20%, rgba(255,255,255,0.08), transparent 60%)",
            }}
            />

            {/* Desktop/Laptop animated spotlight */}
            <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden md:block"
            style={{
                background: `radial-gradient(circle at ${smoothedMouse.x}px ${smoothedMouse.y}px, rgba(255,255,255,0.2), transparent 420px)`,
            }}
            />

            {/* Top logo (overlay, doesn't shift layout) */}
            <div className="absolute lg:top-6 sm:top-24 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <img
                    src="/Initials Logo No Background.png"
                    alt="TS Logo"
                    className="w-16 h-16 sm:w-16 sm:h-16"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8 pb-20 pt-24 sm:pt-32">
            <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
                {/* Intro Text */}
                <div className="text-center md:text-left">
                <h1 className="font-extrabold text-green-400 mb-4 leading-tight text-[clamp(1.8rem,6vw,4.5rem)]">
                    Hello, my name is Tai Sewell
                </h1>

                <p className="text-zinc-300 mb-7 leading-relaxed mx-auto md:mx-0 max-w-xl text-[clamp(0.95rem,3.5vw,1.25rem)]">
                    I’m a Software Development student at Austin Community College. I enjoy
                    building everything from simple tools to full‑stack applications. With a
                    background in athletics, I bring adaptability, teamwork, and technical
                    skill to every project.
                </p>

                <div className="flex flex-col items-center md:items-start gap-4">
                    <Link to="/portfolio">
                    <button
                        className="bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl px-6 sm:px-8 py-3 sm:py-3.5 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        aria-label="View my work"
                    >
                        View My Work
                    </button>
                    </Link>

                    <div className="flex gap-4 sm:gap-6 mt-2">
                    <a
                        href="https://github.com/TaiSewell"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg ring-1 ring-white/10 hover:text-green-400 hover:ring-green-400 transition focus:outline-none focus:ring-2 focus:ring-green-400"
                        aria-label="GitHub"
                    >
                        <FaGithub className="text-2xl sm:text-3xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tai-sewell-9bbb90271/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg ring-1 ring-white/10 hover:text-green-400 hover:ring-green-400 transition focus:outline-none focus:ring-2 focus:ring-green-400"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-2xl sm:text-3xl" />
                    </a>
                    </div>
                </div>
                </div>

                {/* Image */}
                <div>
                <img
                    src={profilePic}
                    alt="Profile"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="mx-auto rounded-2xl border-4 border-white shadow-lg object-cover w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    sizes="(max-width: 640px) 14rem, (max-width: 768px) 18rem, 28rem"
                />
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Home;
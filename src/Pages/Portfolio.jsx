/************************************************
 * Developer: Tai Sewell
 * File: Portfolio.jsx
 * Description: This file holds the funtion Portfolio()
   It is used to display the portfolio page on
   my website. It uses smaller sections and
   components inside of it.
 ***********************************************/
import Navbar from '../Components/Navbar';
import Projects from './Sections/Projects';
import Experience from './Sections/Experience';
import Education from './Sections/Education';
import Footer from '../Components/Footer';
import { useEffect, useState, useRef } from 'react';

function Portfolio() {
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
        <div className="scroll-smooth">
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen bg-black text-white"
            >
            {/* Smooth spotlight background */}
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                background: `radial-gradient(circle at ${smoothedMouse.x}px ${smoothedMouse.y}px, rgba(255, 255, 255, 0.1), transparent 400px)`
              }}
          />

        <div className="flex">
          <Navbar />
          <main className="px-8 py-20 w-full max-w-3xl mx-auto text-white scroll-pt-24">

            <section id="projects" className="mb-60 scroll-mt-24">
              <div className="pl-2 border-l-2 border-green-500 relative mb-3">
                <h2 className="text-2xl font-semibold">Projects</h2>
              </div>
              {/* Your projects section */}
              <Projects />
            </section>

            <section id="experience" className="mb-60 scroll-mt-24">
              <div className="pl-2 border-l-2 border-green-500 relative mb-3">
                <h2 className="text-2xl font-semibold mb-3">Experience</h2>
              </div>
              <Experience />
            </section>

            <section id="education" className="mb-60 scroll-mt-24">
              <div className="pl-2 border-l-2 border-green-500 relative mb-3">
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>
              <Education />
            </section>
          </main>
        </div>
        <section>
          <Footer />
        </section>
      </div>
      </div>
    );
}

export default Portfolio;
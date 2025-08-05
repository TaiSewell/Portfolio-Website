import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Education from './Sections/Education';
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

        <div className="flex">
          <Navbar />
          <main className="ml-48 px-8 py-20 w-full text-white scroll-pt-24">
            <section id="projects" className="mb-16 pl-4 border-l-4 border-green-500">
                <h2 className="text-xl font-semibold mb-3">Projects</h2>
              {/* Your projects section */}
            </section>

            <section id="education" className="mb-16">
              <div className="pl-2 border-l-2 border-green-500 relative mb-3">
                <h2 className="text-xl font-semibold">Education</h2>
              </div>
              <Education />
              {/* Your education section */}
            </section>

            <section id="experience" className="pl-4 border-l-4 border-green-500">
              <h2 className="text-xl font-semibold mb-3">Experience</h2>
              {/* Your experience details */}
            </section>
          </main>
        </div>
      </div>
    );
}

export default Portfolio;
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

function Portfolio() {
    return (
    <div className="flex">
      <Sidebar />
      <main className="ml-48 p-10 w-full text-white">
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <Link to='/'>
            <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg duration-300"> 
                Home
            </button>
          </Link>
        </section>

        <section id="education" className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          {/* Your education section */}
        </section>

        <section id="experience">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          {/* Your experience details */}
        </section>
      </main>
    </div>
    );
}

export default Portfolio;
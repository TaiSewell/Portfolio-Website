function Projects() {
  return (
    <section id="projects" className="space-y-6">
      {/* TaskTrackr – To-Do List Web App */}
      <a
        href="https://github.com/TaiSewell/ToDoList_Web_App" // <-- update if needed
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col md:flex-row bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-green-500/30 transform hover:scale-[1.01] transition"
      >
        {/* Left: Image */}
        <div className="md:w-[30%] w-full h-36 md:h-auto flex-shrink-0 bg-white p-2">
            <img
                src="./TaskTrackr - Home Page.png"
                alt="Portfolio Website Screenshot"
                className="w-full h-full object-contain"
            />
        </div>

        {/* Right: Content */}
        <div className="p-6 text-white flex flex-col justify-between md:w-[70%]">
          <h3 className="text-xl font-bold text-green-400 mb-2">
            TaskTrackr – To-Do List Web App
          </h3>
          <p className="text-gray-300 mb-4">
            Full‑stack task manager with auth, CRUD, and responsive UI. Built for speed and clarity with a clean, modern interface.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">React</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">FastAPI</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">Python</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">MySQL</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">Docker</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">GitHub</span>
          </div>
        </div>
      </a>

      {/* Steam Game Price/Revenue Prediction Models */}
      <a
        href="https://github.com/TaiSewell/Portfolio-Website/blob/main/public/Sewell_Capstone_Project.ipynb" // <-- placeholder, update to your repo
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col md:flex-row bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-green-500/30 transform hover:scale-[1.01] transition"
      >
        {/* Left: Image */}
        <div className="md:w-[30%] w-full h-36 md:h-auto flex-shrink-0 bg-zinc-700">
          <img
            src="./Capstone Project - Screenshot.png" // <-- replace with your screenshot path
            alt="Steam ML Project Screenshot"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="p-6 text-white flex flex-col justify-between md:w-[70%]">
          <h3 className="text-xl font-bold text-green-400 mb-2">
            Steam Game Price & Revenue Prediction Model
          </h3>
          <p className="text-gray-300 mb-4">
            ML regression project exploring feature engineering to predict game pricing and revenue using historical Steam data.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">Python</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">Scikit‑learn</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">Pandas</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">EDA</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">Jupyter Notebook</span>
          </div>
        </div>
      </a>

      {/* Personal Portfolio Website */}
      <a
        href="https://www.taisewell.com/" // <-- placeholder, update to your repo
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col md:flex-row bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-green-500/30 transform hover:scale-[1.01] transition"
      >
        {/* Left: Image */}
        <div className="md:w-[30%] w-full h-36 md:h-auto flex-shrink-0 bg-black p-2">
        <img
            src="./Personal Website - Home Screen.png"
            alt="Portfolio Website Screenshot"
            className="w-full h-full object-contain"
        />
        </div>

        {/* Right: Content */}
        <div className="p-6 text-white flex flex-col justify-between md:w-[70%]">
          <h3 className="text-xl font-bold text-green-400 mb-2">
            taisewell.com (v1)
          </h3>
          <p className="text-gray-300 mb-4">
            Clean, black‑and‑white layout with wild green accents showcasing projects, education, and experience.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">React</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">Tailwind CSS</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">Vercel</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">UI/UX</span>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">GitHub</span>
          </div>
        </div>
      </a>
    </section>
  );
}

export default Projects;
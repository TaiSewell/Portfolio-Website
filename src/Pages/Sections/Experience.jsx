/************************************************
 * Developer: Tai Sewell
 * File: Experience.jsx
 * Description: This file holds the funtion Experience(),
   this function is reponsible for forming the experience
   section used inside of the Portfolio page.
 ***********************************************/

function Experience() {
    return (
        <section id="experience" className="mb-16">
            {/* Experience Card */}
            <div className="bg-zinc-900 p-6 rounded-xl shadow-md transition transform hover:scale-[1.02] hover:shadow-green-500/30 mb-8">
                <h3 className="text-lg font-bold text-green-400">Sales Associate / IT Specialist</h3>
                <p className="text-sm text-gray-400">Urban Euphoria CBD • 2022 – Present</p>
                <p className="mt-2 text-base text-gray-300 leading-relaxed">
                    At Urban Euphoria CBD, I support both customer engagement and technical operations. I maintain and improve the company website to boost SEO and product visibility, 
                    streamline the online shopping experience, and assist with in-store POS systems. This hybrid role enhances my problem-solving and communication skills 
                    across IT and customer service.
                </p>
                <div className="mt-4">
                    <ul className="flex flex-wrap gap-2">
                        {['Data Analysis', 'Website Design', 'Collaboration', 'Communication'].map((skill) => (
                        <li
                            key={skill}
                            className="px-3 py-1  bg-green-500/10 text-green-400 text-sm rounded-full shadow-md"
                        >
                            {skill}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>

        
            {/* Coursework Cards */}
            <div className="bg-zinc-900 p-6 rounded-xl shadow-md transition transform hover:scale-[1.02] hover:shadow-green-500/30 mb-3">
                <h3 className="text-md font-bold text-green-400 mb-2">Data Structures & Algorithms</h3>
                <p className="text-sm text-gray-300 mb-2">
                    Learned algorithm efficiency, Big O notation, recursion, and implemented custom data structures in C++.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">C++</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Big O</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Algorithms</span>
                </div>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl shadow-md transition transform hover:scale-[1.02] hover:shadow-green-500/30 mb-3">
                <h3 className="text-md font-bold text-green-400 mb-2">Computational Thinking</h3>
                <p className="text-sm text-gray-300 mb-2">
                    Learned to solve problems using abstraction, decomposition, and logical reasoning. Practiced converting real-world challenges into algorithmic steps.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Problem Solving</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Algorithms</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Logic</span>
                </div>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl shadow-md transition transform hover:scale-[1.02] hover:shadow-green-500/30 mb-3">
                <h3 className="text-md font-bold text-green-400 mb-2">Machine Learning</h3>
                <p className="text-sm text-gray-300 mb-2">
                    Built regression and classification models using real-world datasets. Practiced model evaluation, feature selection, and data visualization with Python.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Python</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">scikit-learn</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Classification</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Regression</span>
                </div>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl shadow-md transition transform hover:scale-[1.02] hover:shadow-green-500/30 mb-3">
                <h3 className="text-md font-bold text-green-400 mb-2">Systems Analysis & Design</h3>
                <p className="text-sm text-gray-300 mb-2">
                    Focused on planning and documenting scalable systems using SDLC methods. Created diagrams and modeled real-world applications with project documentation.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">UML</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">SDLC</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Agile</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Documentation</span>
                </div>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl shadow-md transition transform hover:scale-[1.02] hover:shadow-green-500/30 mb-3">
                <h3 className="text-md font-bold text-green-400 mb-2">Cloud Computing</h3>
                <p className="text-sm text-gray-300 mb-2">
                    Gained hands-on experience with AWS services and cloud-based architecture. Focused on scalability, storage, and infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">AWS</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">EC2</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">S3</span>
                </div>
            </div>
        </section>
    );
}

export default Experience;
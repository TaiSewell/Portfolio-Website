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

        
        <div className="flex flex-wrap gap-6">
        {/* Card 1 */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-md w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] hover:scale-[1.02] hover:shadow-green-500/30 transition">
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

        {/* Repeat the same structure for each card below */}
        {/* Computational Thinking */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-md w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] hover:scale-[1.02] hover:shadow-green-500/30 transition">
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

        <div className="bg-zinc-900 p-6 rounded-xl shadow-md w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] hover:scale-[1.02] hover:shadow-green-500/30 transition">
            <h3 className="text-md font-bold text-green-400 mb-2">Machine Learning</h3>
            <p className="text-sm text-gray-300 mb-2">
                Built regression and classification models using real-world datasets. Evaluated model performance and visualized data in Python.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">scikit-learn</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Regression</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Classification</span>
            </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl shadow-md w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] hover:scale-[1.02] hover:shadow-green-500/30 transition">
            <h3 className="text-md font-bold text-green-400 mb-2">Systems Analysis & Design</h3>
            <p className="text-sm text-gray-300 mb-2">
                Applied SDLC methods to plan and model scalable systems. Produced diagrams, requirements documents, and wireframes for real-world projects.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">UML</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">SDLC</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Wireframing</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Documentation</span>
            </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl shadow-md w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] hover:scale-[1.02] hover:shadow-green-500/30 transition">
            <h3 className="text-md font-bold text-green-400 mb-2">Cloud Computing</h3>
            <p className="text-sm text-gray-300 mb-2">
                Worked hands-on with AWS services to build scalable and secure cloud-based systems. Focused on compute, storage, and deployment.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">AWS</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">EC2</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">S3</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Cloud Architecture</span>
            </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl shadow-md w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] hover:scale-[1.02] hover:shadow-green-500/30 transition">
            <h3 className="text-md font-bold text-green-400 mb-2">Programming Languages</h3>
            <p className="text-sm text-gray-300 mb-2">
                Explored modern programming paradigms and advanced language features. Gained hands-on experience with functional, object-oriented, and scripting languages to build efficient, scalable programs.
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Java</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">OOP</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">Functional Programming</span>
            </div>
        </div>

        {/* Add the rest similarly: Machine Learning, Systems Analysis & Design, Cloud Computing */}
        </div>
        </section>
    );
}

export default Experience;
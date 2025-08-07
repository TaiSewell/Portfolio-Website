/************************************************
 * Developer: Tai Sewell
 * File: ContactMe.jsx
 * Description: This file holds the funtion Contact()
   that displays the contact section inside the portfolio
   page.
 ***********************************************/

const Contact = () => {
  return (
    <section id="contact" className="w-full py-24 px-4">
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-green-400 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          Feel free to reach out with any questions or opportunities to connect.
        </p>
        <a
          href="mailto:tai.sewell2026@gmail.com"
          className="inline-flex items-center justify-center bg-green-500 text-black px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-md"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-green-400 mb-4">
          Get In Touch
        </h2>

        {/* Brief Description */}
        <p className="text-lg text-gray-300 mb-8">
          Have a question or want to work together? I'd love to hear from you.
        </p>

        {/* Contact Button */}
        <a
          href="mailto:tai.sewell2026@gmail.com"
          className="inline-block bg-green-500 hover:bg-green-600 text-black text-lg px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 hover:shadow-lg duration-300"
        >
          Contact
        </a>
      </div>
    </section>
  );
};

export default Contact;
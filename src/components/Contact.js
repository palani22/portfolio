import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="px-6 py-20 text-center">
      <h2 className={`text-3xl font-semibold mb-6 text-white transition-transform duration-500 ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'}`}>
        Contact Me
      </h2>
      <p className={`text-md mb-8 text-white transition-transform duration-500 delay-100 ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'}`}>
        I’m always excited to connect with like-minded professionals and collaborate on challenging projects. Feel free to reach out to discuss your ideas or any opportunities.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 transition-opacity duration-500 delay-200">
        <input
          className={`w-full p-2 border border-gray-300 rounded-lg transition duration-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className={`w-full p-2 border border-gray-300 rounded-lg transition duration-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className={`w-full h-20 p-2 border border-gray-300 rounded-lg transition duration-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className={`w-full bg-green-600 hover:bg-green-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 py-2 rounded-lg transition-transform duration-200 transform ${isVisible ? 'scale-100' : 'scale-90'}`}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;

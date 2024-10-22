import React, { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt, FaTools } from 'react-icons/fa'; // Icons for the skills

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
        threshold: 0.1, 
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
    <section ref={sectionRef} id="about" className="px-6 py-20 text-white">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className={`text-3xl font-semibold mb-6 transition-transform duration-500 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-10 opacity-0'}`}>
          About Me
        </h2>
        <p className={`text-md mb-6 transition-transform duration-500 delay-100 ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'}`}>
          As a Front-End Developer with 2 years of hands-on experience, I specialize in building intuitive and interactive web applications that provide seamless user experiences. I have a strong proficiency in JavaScript frameworks like React.js and Next.js, and I’m passionate about using modern web technologies like Tailwind CSS and Chakra UI to deliver clean, responsive, and visually appealing designs.
        </p>
        <p className={`text-md mb-6 transition-transform duration-500 delay-200 ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'}`}>
          I take pride in my problem-solving abilities and my commitment to writing clean, maintainable code. My previous projects include AI-powered solutions, personalized email systems, and law firm management tools that helped streamline business operations.
        </p>

        <h3 className={`text-3xl font-semibold mt-12 transition-transform duration-500 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-10 opacity-0'}`}>
          Key Skills
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 text-black">
          {[
            { icon: <FaReact className="text-4xl text-blue-500 mx-auto mb-4" />, title: 'React.js & Next.js', description: 'Building modern and scalable web applications with React and Next.js.' },
            { icon: <FaNodeJs className="text-4xl text-green-500 mx-auto mb-4" />, title: 'JavaScript & Node.js', description: 'Proficient in JavaScript and server-side programming with Node.js.' },
            { icon: <FaDatabase className="text-4xl text-purple-500 mx-auto mb-4" />, title: 'Supabase & PostgreSQL', description: 'Experience with Supabase and managing relational databases.' },
            { icon: <FaMobileAlt className="text-4xl text-teal-500 mx-auto mb-4" />, title: 'Responsive Web Design', description: 'Creating responsive and user-friendly interfaces across all devices.' },
            { icon: <FaTools className="text-4xl text-yellow-500 mx-auto mb-4" />, title: 'UI/UX Best Practices', description: 'Adhering to UI/UX principles for optimal user experiences.' },
            { icon: <FaReact className="text-4xl text-indigo-500 mx-auto mb-4" />, title: 'Tailwind CSS & Chakra UI', description: 'Styling modern applications with Tailwind CSS and Chakra UI.' },
          ].map((skill, index) => (
            <div
              key={index}
              className={`p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-blue-100 ${isVisible ? 'scale-100' : 'scale-90 opacity-0'}`}
            >
              {skill.icon}
              <h4 className="text-lg font-semibold">{skill.title}</h4>
              <p className="mt-2 text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, clientHeight } = element;
          if (window.scrollY >= offsetTop - clientHeight / 2 && window.scrollY < offsetTop + clientHeight / 2) {
            setActiveTab(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex justify-around items-center p-4 sticky top-0 z-10 transition duration-300 ${isScrolled ? 'backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className='mr-16 flex items-center gap-2'>
        <p className='text-3xl font-semibold text-white'>Portfolio</p>
      </div>
      <ul className="flex text-white gap-12 relative">
        {['home', 'about', 'projects', 'contact'].map((tab) => (
          <li key={tab} className="relative">
            <a 
              href={`#${tab}`} 
              className={`relative text-white transition duration-300 ${
                activeTab === tab ? 'text-teal-300' : 'hover:text-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 h-1 w-full bg-teal-500 transition-all duration-300" />
              )}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-6 w-6 text-white hover:text-gray-300 transition duration-300" />
        </a>
        <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="h-6 w-6 text-white hover:text-gray-300 transition duration-300" />
        </a>
        <a href="https://github.com/your-github-handle" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6 text-white hover:text-gray-300 transition duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

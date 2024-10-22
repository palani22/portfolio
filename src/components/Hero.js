import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center pb-12"
    >
      <motion.h1 
        className="text-lg md:text-4xl text-white font-semibold"
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
       "Hi there! I'm Palani!
      </motion.h1>
      <motion.p 
        className="text-lg mt-4 text-gray-300 text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6, delay: 0.2 }} 
      >
       I specialize in creating user-friendly interfaces and enhancing user experiences.
      </motion.p>
      
      <motion.p
        className="text-md mt-6 text-gray-400 text-center max-w-md"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        I'm passionate about building efficient and scalable applications that enhance user experience. With a strong foundation in full-stack development, I continuously seek to learn and implement new technologies.
      </motion.p>

      <motion.div
        className="mt-8 flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.a
          href="#projects"
          className="px-8 py-3 border border-black text-black bg-white rounded-lg hover:bg-gray-100 transition duration-300"
        >
          View My Projects
        </motion.a>
        <motion.a
          href="#contact"
          className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300"
        >
          Let’s Connect!
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

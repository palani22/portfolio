import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
   <div
      style={{
        backgroundImage: 'url("/jeremy-bishop-G9i_plbfDgk-unsplash.jpg")', // Ensure the path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default App;

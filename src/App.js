import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper'; 

const App = () => {
  return (
      <Wrapper> 
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Wrapper>
  );
};

export default App;

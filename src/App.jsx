import React from 'react';
import CustomNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <CustomNavbar />
      <div id="home" className="bg-dark text-light">
        <HeroSection />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;

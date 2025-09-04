import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import DesignPortfolio from '../components/DesignPortfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="cyberpunk-portfolio">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <DesignPortfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
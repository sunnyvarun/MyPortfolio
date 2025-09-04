import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="particles-background absolute inset-0"></div>
      <div className="text-center z-10 px-4">
        <h1 className="glitch text-4xl md:text-6xl font-bold mb-4 text-white" data-text="SUNCHU VARUNKANTH">
          SUNCHU VARUNKANTH
        </h1>
        <p className="text-[#b967ff] text-xl md:text-2xl mb-8">Web Developer crafting digital experiences.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="px-6 py-3 bg-[#00f5ff] text-[#0d0d12] font-bold rounded hover:bg-[#b967ff] transition-colors">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-[#00f5ff] text-[#00f5ff] font-bold rounded hover:bg-[#00f5ff] hover:text-[#0d0d12] transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
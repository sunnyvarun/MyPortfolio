import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-[#0d0d12] bg-opacity-90 z-50 border-b border-[#00f5ff] border-opacity-20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-[#00f5ff]" data-text="SUNCHU VARUNKANTH">
            SUNCHU VARUNKANTH
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-[#00f5ff] transition-colors">About</a>
            <a href="#skills" className="text-white hover:text-[#00f5ff] transition-colors">Skills</a>
            <a href="#projects" className="text-white hover:text-[#00f5ff] transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-[#00f5ff] transition-colors">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="text-[#00f5ff]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
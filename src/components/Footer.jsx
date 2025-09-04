import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-[#0d0d12] border-t border-[black]">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          © {currentYear} Sunchu Varunkanth. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
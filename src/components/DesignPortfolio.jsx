import React, { useState } from 'react';

const DesignPortfolio = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  
  const designs = [
    { 
      title: "Event Poster", 
      image: "/images/event-poster.jpg",
      description: "Designed promotional materials for tech events",
      category: "Print Design"
    },
    { 
      title: "Branding Design", 
      image: "/images/branding.jpg",
      description: "Created visual identity for campus clubs and events",
      category: "Brand Identity"
    },
    { 
      title: "UI/UX Mockup", 
      image: "/images/ui-ux.jpg",
      description: "Designed user interfaces for web and mobile applications",
      category: "Digital Design"
    },
    { 
      title: "Social Media Graphics", 
      image: "/images/social-media.jpg",
      description: "Engaging content for digital platforms and campaigns",
      category: "Digital Marketing"
    },
    { 
      title: "Illustrations", 
      image: "/images/illustrations.jpg",
      description: "Custom artwork and digital illustrations",
      category: "Digital Art"
    },
    { 
      title: "Presentation Design", 
      image: "/images/presentation.jpg",
      description: "Visual storytelling through slide decks and presentations",
      category: "Business Design"
    }
  ];

  return (
    <section id="design" className="py-20 px-4 relative">
      {/* Particle background */}
      <div className="particles-background absolute inset-0"></div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#00f5ff] " data-text="Visual Gallery">Visual Gallery</h2>
      <p className="text-center text-[#b967ff] mb-12 max-w-2xl mx-auto">Showcasing my design work as Design Head at ICC Club and personal projects</p>
      
      {/* Design grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {designs.map((design, index) => (
          <div 
            key={index} 
            className="group relative bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden transition-all duration-500 hover:border-[#b967ff] hover:shadow-lg hover:shadow-[#b967ff]/20"
            onClick={() => setSelectedDesign(design)}
          >
            {/* Image placeholder with gradient */}
            <div className="h-60 bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.1)] flex flex-col items-center justify-center p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="w-16 h-16 bg-[#00f5ff] rounded-full mb-4 flex items-center justify-center text-2xl">
                🎨
              </div>
              <span className="text-gray-400 text-sm text-center">Click to view {design.title}</span>
            </div>
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-bold mb-1">{design.title}</h3>
              <p className="text-[#b967ff] text-xs font-medium mb-2">{design.category}</p>
              <p className="text-gray-300 text-sm">{design.description}</p>
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="inline-block px-3 py-1 bg-[#00f5ff] bg-opacity-20 text-[#00f5ff] text-xs rounded-full">
                  View Project
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal for design details */}
      {selectedDesign && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedDesign(null)}>
          <div className="bg-[#0d0d12] border border-[#00f5ff] rounded-xl max-w-2xl w-full p-6" onClick={e => e.stopPropagation()}>
            <div className="h-64 bg-gradient-to-br from-[#0d0d12] to-[#1a1a2e] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Design Preview: {selectedDesign.title}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#00f5ff] mb-2">{selectedDesign.title}</h3>
            <p className="text-[#b967ff] font-medium mb-2">{selectedDesign.category}</p>
            <p className="text-gray-300 mb-4">{selectedDesign.description}</p>
            <div className="flex justify-end">
              <button 
                className="px-4 py-2 bg-[#ff2a6d] text-white rounded-md hover:bg-opacity-80 transition-colors"
                onClick={() => setSelectedDesign(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Add custom styles for the grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.01)),
            linear-gradient(rgba(255, 255, 255,0.01));
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default DesignPortfolio;
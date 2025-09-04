import React from 'react';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#00f5ff]">Experience</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Main timeline line with more left padding */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-[#00f5ff] via-[#b967ff] to-[#ff2a6d]"></div>
          
          <div className="space-y-12 pl-14">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot with pulse animation */}
                <div className="absolute -left-12 top-6 w-4 h-4 rounded-full bg-[#00f5ff] border-4 border-[#0d0d12] z-10 animate-pulse"></div>
                
                <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#00f5ff]">{exp.title}</h3>
                      <p className="text-[#b967ff] font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <p className="text-[#ff2a6d] text-sm">{exp.date}</p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="text-gray-300 space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#ff2a6d] mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-[#1a1a1a]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#00f5ff]">Tech Skills & Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00f5ff]/30 hover:border-[#00f5ff] group">
            <h3 className="text-xl text-[#b967ff] mb-4 capitalize">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-[#00f5ff]/20 text-[#00f5ff] text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
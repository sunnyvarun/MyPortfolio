import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#00f5ff]">The Mind Behind the Screen</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="holographic-border">
          <img src="/images/profile.jpg" alt="Sunchu Varunkanth" className="w-48 h-48 rounded-lg" />
        </div>
        <div className="max-w-md">
          <p className="text-gray-300 mb-6">
            Motivated B.Tech Information Technology student at SNIST with strong analytical, 
            communication, and problem-solving skills. Passionate about full stack development, 
            Java, and UI/UX design.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row">
              <span className="font-bold text-[#00f5ff] min-w-[120px]">Education:</span>
              <span>B.Tech in Information Technology at SNIST</span>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="font-bold text-[#00f5ff] min-w-[120px]">Role:</span>
              <span>Full Stack Developer & Design Head at ICC Club</span>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="font-bold text-[#00f5ff] min-w-[120px]">Interests:</span>
              <span>Web Development, AI/ML, Prompt Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
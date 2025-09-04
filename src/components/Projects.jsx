import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to normalize project data
  const normalizeProject = (project) => {
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      technologies: project.technologies || [],
      image: project.image || project.image_url || '/api/placeholder/300/200',
      githubUrl: project.githubUrl || project.github_url,
      liveUrl: project.liveUrl || project.live_url
    };
  };

  useEffect(() => {
    const loadProjects = () => {
      // Use only local data
      const normalizedProjects = projectsData.map(normalizeProject);
      setProjects(normalizedProjects);
      setLoading(false);
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 relative">
        <div className="particles-background"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#00f5ff]" data-text="The Lab">The Project Lab</h2>
        <div className="text-center text-[#b967ff]">Loading projects...</div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 relative">
      {/* Particles background effect */}
      <div className="particles-background absolute inset-0"></div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#00f5ff]" data-text="The Lab">The Project Lab</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map(project => (
          <div 
            key={project.id} 
            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#ff2a6d]/30 hover:border-[#ff2a6d] group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white bg-[#ff2a6d] bg-opacity-80 px-4 py-2 rounded transition-all duration-300 hover:bg-opacity-100 hover:scale-105"
                  >
                    Code
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white bg-[#ff2a6d] bg-opacity-80 px-4 py-2 rounded transition-all duration-300 hover:bg-opacity-100 hover:scale-105"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-white text-opacity-70 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-[#ff2a6d]/20 text-[#ff2a6d] text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
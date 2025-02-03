import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const PortfolioShowcase = () => {
  const [page, setPage] = useState(1);
  const projects = [
    {
      id: 1,
      title: "Blockchain Education Platform",
      case_name: "Decentralized Learning",
      description: "A comprehensive learning management system built on Internet Computer Protocol",
      image01: "/placeholder-bg.jpg", // Replace with actual background image
      image1: "/project-img1.jpg",
      image2: "/project-img2.jpg", 
      image3: "/project-img3.jpg",
      technologies: ["Motoko", "React", "ICP", "TypeScript"]
    },
    {
      id: 2,
      title: "AI Insurance Underwriting",
      case_name: "Risk Assessment Automation",
      description: "Machine learning model for automated risk assessment and policy pricing",
      image01: "/placeholder-bg.jpg",
      image1: "/project-img1.jpg",
      image2: "/project-img2.jpg", 
      image3: "/project-img3.jpg",
      technologies: ["Python", "TensorFlow", "Django", "PostgreSQL"]
    },
    // Add more projects as needed
  ];

  const totalPages = Math.ceil(projects.length / 1);

  return (
    <div className="container mx-auto px-4 py-20 bg-black">
      <div className="portfolio-section">
        <section className="intro-section text-center mb-12">
          <div className="big-circle bg-indigo-900 rounded-full w-32 h-32 mx-auto flex items-center justify-center">
            <div className="small-circle bg-indigo-700 rounded-full w-16 h-16"></div>
          </div>
          <div className="retext mt-4">
            <h1 className="text-3xl font-bold text-indigo-300">-Portfolio Showcase-</h1>
          </div>
        </section>
        <hr className="my-8 border-indigo-800" />
        
        {projects.map((project) => (
          <div
            key={project.id}
            className="portfolio-item bg-cover bg-center mb-8 rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${project.image01})` }}
          >
            <div className="portfolio-content p-6 bg-black/80 backdrop-blur-sm">
              <h2 className="portfolio-title text-2xl font-bold text-indigo-300 mb-4">{project.title}</h2>
              <p className="portfolio-description text-indigo-200 mb-4">
                <span className="font-semibold text-indigo-400">Case Name:</span> {project.case_name}
                <br />
                <span className="font-semibold text-indigo-400">Description:</span> {project.description}
              </p>
              
              {/* Technologies Used */}
              <div className="technologies flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="project-links flex space-x-4 mb-4">
                <a
                  href={`/project/${project.id}`}
                  className="view-case-button flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                >
                  View Full Case <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="github-link flex items-center px-4 py-2 border border-indigo-600 text-indigo-300 rounded hover:bg-indigo-600/10 transition-colors"
                >
                  GitHub <Github className="ml-2 w-4 h-4" />
                </a>
              </div>

              {/* Project Images */}
              <div className="portfolio-images grid grid-cols-3 gap-4 mt-6">
                <img 
                  src={project.image1} 
                  alt="Project Image 1" 
                  className="w-full h-32 object-cover rounded" 
                />
                <img 
                  src={project.image2} 
                  alt="Project Image 2" 
                  className="w-full h-32 object-cover rounded" 
                />
                <img 
                  src={project.image3} 
                  alt="Project Image 3" 
                  className="w-full h-32 object-cover rounded" 
                />
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="pagination flex justify-center mt-8">
          <span className="step-links flex space-x-2 items-center">
            {page > 1 && (
              <>
                <button 
                  onClick={() => setPage(1)} 
                  className="text-indigo-500 hover:text-indigo-300"
                >
                  &laquo; first
                </button>
                <button 
                  onClick={() => setPage(page - 1)} 
                  className="text-indigo-500 hover:text-indigo-300"
                >
                  previous
                </button>
              </>
            )}
            <span className="current text-indigo-300">
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <>
                <button 
                  onClick={() => setPage(page + 1)} 
                  className="text-indigo-500 hover:text-indigo-300"
                >
                  next
                </button>
                <button 
                  onClick={() => setPage(totalPages)} 
                  className="text-indigo-500 hover:text-indigo-300"
                >
                  last &raquo;
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
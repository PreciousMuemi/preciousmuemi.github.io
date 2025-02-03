import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import PropTypes from 'prop-types';

const projects = [
  {
    title: "Blockchain Education Platform",
    description: "Decentralized learning management system built on Internet Computer Protocol",
    tech: ["Motoko", "React", "ICP", "TypeScript"],
    category: "blockchain",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "AI Insurance Underwriting",
    description: "Machine learning model for automated risk assessment and policy pricing",
    tech: ["Python", "TensorFlow", "Django", "PostgreSQL"],
    category: "ai",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Endocare",
    description: "Mobile health records management system for endocrinology clinics",
    tech: ["Kotlin", "React Native", "Firebase", "Node.js"],
    category: "mobile",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Social Analytics Dashboard",
    description: "Real-time social media analytics and sentiment analysis platform",
    tech: ["React", "Power BI", "Python", "MongoDB"],
    category: "analytics",
    githubUrl: "#",
    demoUrl: "#"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {project.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
        >
          GitHub <ExternalLink size={16} />
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
        >
          Demo <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired,
    demoUrl: PropTypes.string.isRequired,
  }).isRequired,
};

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-400 transition-all duration-300"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

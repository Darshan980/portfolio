import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // Component for each project
import projectsData from './ProjectsData'; // Data file for projects

import './Project.css'; // Importing CSS file

function Projects({ showAll = false }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="text-center heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>My Projects</h2>
          <div className="divider"></div>
          <p>Here are some of my recent projects. Each represents a unique challenge and solution.</p>
        </motion.div>

        {!showAll && (
          <div className="filter-buttons">
            {['all', 'web', 'mobile'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={filter === category ? 'active' : ''}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}

        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {!showAll && (
          <div className="view-more">
            <a href="/portfolio" className="btn">
              View All Projects
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;

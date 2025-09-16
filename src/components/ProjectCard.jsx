import React, { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              opacity: imageLoaded ? 1 : 0.7,
              transition: 'opacity 0.3s ease'
            }}
          />
        ) : (
          // Fallback content if image fails to load
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              background: '#f0f4f8',
              color: '#718096',
              fontSize: '0.9rem'
            }}
          >
            No image available
          </div>
        )}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

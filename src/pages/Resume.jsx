import React from 'react';
import "./Resume.css";

function Resume() {
  const experiences = [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2023 - Present',
      description: 'Led development of responsive web applications using React, Redux, and CSS.'
    },
    {
      id: 2,
      role: 'Web Developer',
      company: 'Digital Creations',
      period: 'Mar 2020 - Dec 2022',
      description: 'Developed and maintained client websites, implemented new features, and ensured cross-browser compatibility.'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'B.S. Computer Science',
      institution: 'Tech University',
      year: '2020',
      description: 'Graduated with honors. Specialized in Web Development and UI/UX Design.'
    }
  ];

  return (
    <div className="resume-container">
      <h1 className="resume-title">Resume</h1>
      
      <section className="resume-section">
        <h2 className="resume-section-title">Experience</h2>
        {experiences.map(exp => (
          <div key={exp.id} className="resume-item">
            <h3 className="resume-item-title">{exp.role}</h3>
            <div className="resume-item-meta">
              <span>{exp.company}</span>
              <span>{exp.period}</span>
            </div>
            <p className="resume-item-description">{exp.description}</p>
          </div>
        ))}
      </section>
      
      <section className="resume-section">
        <h2 className="resume-section-title">Education</h2>
        {education.map(edu => (
          <div key={edu.id} className="resume-item">
            <h3 className="resume-item-title">{edu.degree}</h3>
            <div className="resume-item-meta">
              <span>{edu.institution}</span>
              <span>{edu.year}</span>
            </div>
            <p className="resume-item-description">{edu.description}</p>
          </div>
        ))}
      </section>
      
      <div className="resume-download-container">
        <a href="/John_Doe_Resume.pdf" download className="resume-download">
          Download Resume PDF
        </a>
      </div>
    </div>
  );
}

export default Resume;

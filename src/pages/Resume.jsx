import React from 'react';
import "./Resume.css";

function Resume() {
  const experiences = [
    {
      id: 1,
      role: 'Cloud Computing Trainee',
      company: 'ROOMAN TECHNOLOGIES',
      location: 'Bengaluru, Karnataka',
      period: 'December 2024 - May 2025',
      description: [
        'Training in cloud computing, focusing on AWS, Azure, and Google Cloud.',
        'Learning to design and deploy scalable, cloud-native applications.',
        'Gaining experience with Kubernetes, Docker, CI/CD pipelines, and cloud security.',
        'Exploring strategies for cost optimization, high availability, and disaster recovery.',
        'Strengthening DevOps skills and staying updated on emerging cloud technologies.'
      ]
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'IWAY TRAININGS',
      location: 'Bengaluru, Karnataka',
      period: 'June 2025 - Present',
      description: [
        'Worked on full-stack web development, building and deploying responsive applications.',
        'Gained hands-on experience with React, Node.js, MongoDB, and API development.',
        'Assisted in debugging and optimizing existing code for better performance.',
        'Collaborated with a team in an agile environment, meeting project deadlines.',
        'Improved problem-solving, teamwork, and time management skills.'
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      institution: 'SDM Institute of Technology',
      location: 'Ujire, Karnataka',
      year: 'December 2021 - 2025',
      description: 'Specializing in AI/ML technologies, data science, and full-stack development.'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Instagram Clone',
      description: [
        'Developed a full-stack social media application replicating core Instagram features.',
        'Implemented user authentication using JWT and secure password encryption.',
        'Built a responsive UI with Next.js for posts, reels, likes, and comments.',
        'Integrated MongoDB for scalable database and media storage.',
        'Deployment: Backend hosted on Render, frontend deployed on Vercel.',
        'Features: Image/Video uploads, follow system, real-time likes/comments, and explore feed.'
      ]
    },
    {
      id: 2,
      title: 'Accident Prediction System',
      description: [
        'Built a real-time accident detection system using live video/image input.',
        'Implemented a deep learning model (TensorFlow/Keras) for accident vs. non-accident classification.',
        'Used OpenCV for image preprocessing and frame extraction.',
        'Developed a mobile-first frontend for easy accessibility.',
        'Features: Real-time detection, alert notifications, and prediction dashboard.',
        'Deployment: Backend hosted on Render, frontend deployed on Vercel.'
      ]
    }
  ];

  const skills = [
    { category: 'Languages', items: ['HTML', 'CSS', 'Python', 'JavaScript', 'Java'] },
    { category: 'Frontend', items: ['React', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Express.js'] },
    { category: 'Data Science', items: ['Pandas', 'NumPy', 'Matplotlib'] },
    { category: 'Machine Learning', items: ['TensorFlow', 'Keras'] },
    { category: 'Database', items: ['MySQL', 'MongoDB'] },
    { category: 'Tools & Version Control', items: ['VS Code', 'Git', 'GitHub', 'Jupyter Notebook', 'Vercel', 'Render'] }
  ];

  const contactInfo = {
    name: 'Darshan S',
    email: 'darshanpoojary980@gmail.com',
    phone: '6361129065',
    location: 'India',
    linkedin: 'darshan-s-232481298',
    github: 'github.com/Darshan980',
    portfolio: 'portfolio-eight-azure-cfefgmaj7s.vercel.app'
  };

  return (
    <div className="resume-container">
      {/* Header Section */}
      <header className="resume-header">
        <h1 className="resume-name">{contactInfo.name}</h1>
        <div className="contact-info">
          <div className="contact-item">
            <span>✉️ {contactInfo.email}</span>
          </div>
          <div className="contact-item">
            <span>📞 {contactInfo.phone}</span>
          </div>
          <div className="contact-item">
            <span>📍 {contactInfo.location}</span>
          </div>
          <div className="contact-item">
            <span>💼 LinkedIn: {contactInfo.linkedin}</span>
          </div>
          <div className="contact-item">
            <span>🔗 GitHub: {contactInfo.github}</span>
          </div>
          <div className="contact-item">
            <span>🌐 Portfolio: {contactInfo.portfolio}</span>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="resume-section">
        <h2 className="resume-section-title">Work Experience</h2>
        {experiences.map(exp => (
          <div key={exp.id} className="resume-item">
            <h3 className="resume-item-title">{exp.role}</h3>
            <div className="resume-item-meta">
              <span className="company">{exp.company}</span>
              <span className="location">{exp.location}</span>
              <span className="period">{exp.period}</span>
            </div>
            <ul className="resume-item-description">
              {exp.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="resume-section">
        <h2 className="resume-section-title">Education</h2>
        {education.map(edu => (
          <div key={edu.id} className="resume-item">
            <h3 className="resume-item-title">{edu.degree}</h3>
            <div className="resume-item-meta">
              <span className="institution">{edu.institution}</span>
              <span className="location">{edu.location}</span>
              <span className="year">{edu.year}</span>
            </div>
            <p className="resume-item-description">{edu.description}</p>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="resume-section">
        <h2 className="resume-section-title">Projects</h2>
        {projects.map(project => (
          <div key={project.id} className="resume-item">
            <h3 className="resume-item-title">{project.title}</h3>
            <ul className="resume-item-description">
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="resume-section">
        <h2 className="resume-section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <h4 className="skill-category">{skillGroup.category}:</h4>
              <p className="skill-items">{skillGroup.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Download Section */}
      <div className="resume-download-container">
        <a href="/Darshan_S_Resume.pdf" download className="resume-download">
          Download Resume PDF
        </a>
      </div>
    </div>
  );
}

export default Resume;

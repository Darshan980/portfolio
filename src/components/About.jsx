import React from "react";
import { motion } from "framer-motion";
import "./About.css"; // Import CSS

function About() {
  return (
    <section id="about">
      <div className="about-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="about-title">About Me</h2>
          <div className="about-divider"></div>
        </motion.div>
      </div>
      <div className="about-container">
        {/* Profile Image */}
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img 
            src="/profile_picture.jpg" 
            alt="Profile picture" 
            className="about-image"
          />
        </motion.div>
        {/* About Text */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Machine Learning Engineer & Web Developer</h3>
          <p>
           I'm passionate about building intelligent, functional, and user-friendly applications. Over the past year, I've worked on projects ranging from web development to machine learning, constantly learning new tools and improving my skills.
          </p>
          {/* Stats Section */}
          <div className="about-stats">
            <span className="about-stat">9+ Projects Completed</span>
            <span className="about-stat">1+ Years of Experience</span>
            <span className="about-stat">Always Learning & Exploring</span>
          </div>
          {/* Resume Button */}
          {/* Resume Button */}
          <a href="/RESUME.pdf" download="Darshan_S_Resume.pdf" className="about-button">
             Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

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
          <div className="about-image"></div> {/* Using background-image */}
        </motion.div>

        {/* About Text */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Frontend Developer & UI/UX Designer based in San Francisco</h3>
          <p>
            I'm passionate about creating beautiful, functional, and user-centered digital experiences. 
            With 5+ years of experience, I've worked on projects ranging from small business websites to complex web applications.
          </p>

          {/* Stats Section */}
          <div className="about-stats">
            <span className="about-stat">20+ Projects Completed</span>
            <span className="about-stat">5+ Years of Experience</span>
            <span className="about-stat">15+ Happy Clients</span>
          </div>

          {/* Resume Button */}
          <a href="/resume" className="about-button">
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

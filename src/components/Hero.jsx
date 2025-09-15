import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* Animated Background */}
      <div className="animated-bg"></div>

      <div className="hero-container">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span>Darshan S</span>
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        Machine Learning Engineer | Full-Stack Developer

        </motion.h2>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I build web applications and predictive models using Python.  
   Always learning new tools and improving my skills in development and data science.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#projects" className="hero-button primary">
            View My Work
          </a>
          <a href="#contact" className="hero-button secondary">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <span>Scroll Down</span>
        <div className="scroll-container">
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;

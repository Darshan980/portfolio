import React from "react";
import Projects from "../components/Projects";
import "./Portfolio.css"; // Import styles

function Portfolio() {
  return (
    <section className="portfolio-container">
      <h1 className="portfolio-title">My Portfolio</h1>
      <p className="portfolio-description">
        Explore my latest projects and works. Each project showcases my skills, creativity, and problem-solving abilities.
      </p>
      <Projects showAll />
    </section>
  );
}

export default Portfolio;

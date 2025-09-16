import React from "react";
import Projects from "../components/Projects";
import "./Portfolio.css"; // Import styles

function Project() {
  return (
    <section className="portfolio-container">

      <Projects showAll />
    </section>
  );
}

export default Project;

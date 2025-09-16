import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CTA />
      <Contact />
    </main>
  );
}

export default Home;

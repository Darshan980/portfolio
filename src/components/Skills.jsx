import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import skillVariants from '../variants/skillVariants';
import './Skills.css';

const skillsData = [
  { category: "Frontend Development", items: ["HTML5", "CSS3/SASS", "JavaScript (ES6+)", "TypeScript", "React", "Vue.js", "Next.js"] },
  { category: "UI/UX Design", items: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Responsive Design"] },
  { category: "Tools & Technologies", items: ["Git", "Webpack", "Redux", "TailwindCSS", "Framer Motion", "Three.js", "GraphQL"] },
  { category: "Soft Skills", items: ["Problem Solving", "Communication", "Team Collaboration", "Time Management", "Adaptability"] }
];

const SkillCard = ({ category, items }) => (
  <motion.div 
    className="skill-card"
    variants={skillVariants.container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }} // Adds a 3D tilt effect
  >
    <h3>{category}</h3>
    <div className="skill-items">
      {items.map(skill => (
        <motion.span 
          key={skill} 
          className="skill-tag" 
          variants={skillVariants.item}
          whileHover={{ scale: 1.15, backgroundColor: "#2563eb", color: "#fff" }} // Smooth hover animation
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

function Skills() {
  const memoizedSkills = useMemo(() => skillsData, []);

  return (
    <section id="skills" className="skills-section">
      <motion.div className="skills-header" {...skillVariants.header}>
        <h2>My Skills</h2>
        <div className="divider"></div>
        <p>I've developed a diverse set of skills throughout my career.</p>
      </motion.div>

      <motion.div 
        className="skills-grid"
        initial="hidden"
        whileInView="show"
        variants={skillVariants.grid} // Grid fade-in effect
        viewport={{ once: true, amount: 0.2 }}
      >
        {memoizedSkills.map(skillGroup => (
          <SkillCard key={skillGroup.category} {...skillGroup} />
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;

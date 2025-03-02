import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

function CTA() {
  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, delay, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 }
  });

  return (
    <section id="cta">
      <motion.div 
        className="cta-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h2 className="cta-title" {...fadeInUp()}>
          Ready to bring your ideas to life?
        </motion.h2>

        <motion.div className="cta-divider" {...fadeInUp(0.1)}></motion.div>

        <motion.p className="cta-text" {...fadeInUp(0.2)}>
          I'm currently available for freelance work. Let's collaborate to create something amazing together.
        </motion.p>

        <motion.div {...fadeInUp(0.3)}>
          <a href="#contact" className="cta-button">
            Let's Talk
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CTA;

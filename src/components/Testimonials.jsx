import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css"; // Ensure correct import

const testimonials = [
  {
    id: 1,
    text: "John delivered our website redesign on time and exceeded our expectations. His attention to detail and ability to translate our vision into reality was impressive.",
    name: "Sarah Johnson",
    position: "CEO, Design Studio",
    avatar: "/testimonial1.jpg",
  },
  {
    id: 2,
    text: "Working with John was a pleasure. He not only built us a beautiful website but also provided valuable insights that improved our user experience significantly.",
    name: "Michael Chen",
    position: "Marketing Director, Tech Solutions",
    avatar: "/testimonial2.jpg",
  },
  {
    id: 3,
    text: "John's technical skills and creativity are top-notch. He built a complex web application for us that has received overwhelmingly positive feedback from our users.",
    name: "Emily Rodriguez",
    position: "Product Manager, SaaS Platform",
    avatar: "/testimonial3.jpg",
  },
];

const TestimonialCard = ({ text, name, position, avatar }) => (
  <motion.div
    className="testimonial-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <p className="testimonial-text">"{text}"</p>
    <div className="testimonial-author">
      <img src={avatar} alt={name} />
      <div className="testimonial-author-info">
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  </motion.div>
);

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Client Testimonials</h2>
        <div className="testimonials-divider"></div>
        <p>Here's what my clients have to say about my work and collaboration.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

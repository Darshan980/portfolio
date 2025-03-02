import React, { useState, useEffect } from 'react';

import './Contact.css';

// Simple icon components
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ContactInfo = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`info-box ${animate ? 'fade-in' : ''}`}>
      <h3>Contact Information</h3>
      <p>
        <span className="icon-wrapper"><PhoneIcon /></span>
        <strong>Phone:</strong> +1 (555) 123-4567
      </p>
      <p>
        <span className="icon-wrapper"><EmailIcon /></span>
        <strong>Email:</strong> hello@johndoe.com
      </p>
      <p>
        <span className="icon-wrapper"><LocationIcon /></span>
        <strong>Location:</strong> San Francisco, CA
      </p>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', type: '' });
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({ 
        text: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 
        type: 'success' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage({ text: '', type: '' }), 5000);
    }, 1800);
  };

  return (
    <div className="form-box">
      <h3>Send Me a Message</h3>
      
      {submitMessage.text && (
        <div className={`alert ${submitMessage.type}`}>
          {submitMessage.type === 'success' && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          )}
          {submitMessage.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className={focused === 'name' ? 'active' : ''}>Your Name</label>
          <input 
            id="name" 
            className="input-field" 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className={focused === 'email' ? 'active' : ''}>Your Email</label>
          <input 
            id="email" 
            className="input-field" 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className={focused === 'subject' ? 'active' : ''}>Subject</label>
          <input 
            id="subject" 
            className="input-field" 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange}
            onFocus={() => handleFocus('subject')}
            onBlur={handleBlur}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className={focused === 'message' ? 'active' : ''}>Your Message</label>
          <textarea 
            id="message" 
            className="textarea-field" 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
            onFocus={() => handleFocus('message')}
            onBlur={handleBlur}
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="submit-btn"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-header">
        <h2>GET IN TOUCH</h2>
        <div className="divider"></div>
        <p>Have a project in mind? Feel free to reach out!</p>
      </div>
      <div className="contact-content">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import "./Resume.css";

function Resume() {
  const [showIframe, setShowIframe] = useState(true);

  return (
    <div className="resume-container">
      <div className="pdf-controls">
        <h2>My Resume</h2>
        <div className="divider"></div>
        <div className="button-group">
          <a 
            href="/RESUME.pdf" 
            download="Darshan_Resume.pdf" 
            className="btn download-btn"
          >
            📥 Download PDF
          </a>
          <a 
            href="/RESUME.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn open-btn"
          >
            🔗 Open in New Tab
          </a>
        </div>
      </div>
      
      {showIframe ? (
        <div className="pdf-viewer">
          <iframe
            src="/RESUME.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
            title="Resume PDF"
            onError={() => setShowIframe(false)}
          />
        </div>
      ) : (
        <div className="fallback-message">
          <h3>Unable to display PDF</h3>
          <p>Please download the PDF or open it in a new tab.</p>
          <a 
            href="/RESUME.pdf" 
            download="Darshan_Resume.pdf" 
            className="btn download-btn"
          >
            📥 Download Resume
          </a>
        </div>
      )}

      <div className="resume-note">
        <p>💡 Tip: Use Ctrl/Cmd + scroll to zoom in the PDF viewer</p>
      </div>
    </div>
  );
}

export default Resume;

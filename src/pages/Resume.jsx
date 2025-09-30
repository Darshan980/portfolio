import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import "./Resume.css";

// Set worker to match react-pdf version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
    setError('Failed to load PDF. Please check if the file exists.');
  }

  return (
    <div className="resume-container">
      <div className="pdf-controls">
        <button 
          onClick={() => setPageNumber(pageNumber - 1)} 
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        <span>
          Page {pageNumber || '--'} of {numPages || '--'}
        </span>
        <button 
          onClick={() => setPageNumber(pageNumber + 1)} 
          disabled={pageNumber >= numPages}
        >
          Next
        </button>
        <a href="/RESUME.pdf" download="Resume.pdf">
          Download PDF
        </a>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      <Document 
        file="/RESUME.pdf" 
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<div>Loading PDF...</div>}
      >
        <Page 
          pageNumber={pageNumber} 
          width={Math.min(window.innerWidth * 0.9, 800)}
          renderTextLayer={true}
          renderAnnotationLayer={true}
        />
      </Document>
    </div>
  );
}

export default Resume;

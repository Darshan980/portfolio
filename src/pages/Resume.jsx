import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import "./Resume.css";

// Set worker - use specific version
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume-container">
      <div className="pdf-controls">
        <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
          Previous
        </button>
        <span>Page {pageNumber} of {numPages}</span>
        <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
          Next
        </button>
        <a href="/RESUME.pdf" download>Download PDF</a>
      </div>
      
      <Document file="/../../public/RESUME.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={800} />
      </Document>
    </div>
  );
}

export default Resume;

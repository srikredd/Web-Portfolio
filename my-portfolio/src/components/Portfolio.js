import React from 'react';
import './Portfolio.css'; // Import the CSS for this component

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of Project 1...</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of Project 2...</p>
      </div>
      // Add more projects here
    </div>
  );
}

export default Portfolio;
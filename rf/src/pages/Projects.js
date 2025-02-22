import React from 'react';
import './Projects.css'; // Assuming you have styles here

function Projects() {
  return (
    <div>
      {/* About Us Section with Background Image */}
      <section id="about-us" className="about-us-section">
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>About us content goes here...</p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="vision-mission-section">
        <div className="vision-mission-content">
          <h2>Vision & Mission</h2>
          <p>Vision and mission description goes here...</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Our Projects</h2>
        <div className="project-box">
          <h3>Project 1</h3>
          <p>Project description goes here...</p>
        </div>
        <div className="project-box">
          <h3>Project 2</h3>
          <p>Project description goes here...</p>
        </div>
      </section>
    </div>
  );
}

export default Projects;

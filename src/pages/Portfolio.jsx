// src/pages/Portfolio.jsx
'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard'; // We'll create this component
import projects from '../data/projects';

const Portfolio = () => {
  // Filter projects for Presentation Design category
  const presentationProjects = projects.filter(
    (project) => project.category === 'Presentation Design'
  );

  return (
    <div>
      <Navbar />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Presentation Design
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {presentationProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
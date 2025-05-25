// src/components/ProjectCard.jsx

import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
        <p className="text-gray-600">{project.description}</p>
        {project.toolsUsed && (
          <div className="mt-2">
            {project.toolsUsed.map((tool, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
        {/* Add more details here as needed (client, date, etc.) */}
      </div>
    </div>
  );
};

export default ProjectCard;
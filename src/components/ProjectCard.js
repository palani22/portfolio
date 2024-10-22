import React from 'react';

const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className="border p-4 bg-white text-black rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-blue-100">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={title.includes('MCLAP') ? 'text-sm mt-8 mb-3' : 'text-sm'}>{description}</p>
      <p className="italic mt-2 text-sm">Technologies: {technologies}</p>
    </div>
  );
};

export default ProjectCard;

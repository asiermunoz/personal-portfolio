import type { ProjectCardProps } from'/Users/asiermunoz/Documents/personal-portfolio/src/types/project.d.ts'
import '/Users/asiermunoz/Documents/personal-portfolio/src/styles/ProjectCard.css'
import React from 'react';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link, imageUrl }) => {

    console.log('imageUrl:', imageUrl); 
    return (
    <div className="project-card">
      {imageUrl && <img src={imageUrl} alt={title} className="project-image" />}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech: string, index: number) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
import type { ProjectCardProps } from '../../types/project'
import '../../styles/ProjectCard.css'

const ProjectCard = ({ title, description, technologies, link, imageUrl }: ProjectCardProps) => {
  return (
    <div className="project-card">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Captura de pantalla del proyecto ${title}`}
          className="project-image"
          loading="lazy"
        />
      )}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech: string) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          Ver Proyecto
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
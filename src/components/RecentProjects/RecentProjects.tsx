import React from 'react';
import { Project } from '../../types/dashboard';
import './RecentProjects.css';

interface RecentProjectsProps {
  projects: Project[];
}

const RecentProjects: React.FC<RecentProjectsProps> = ({ projects }) => {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active':
        return 'status-active';
      case 'completed':
        return 'status-completed';
      case 'on-hold':
        return 'status-on-hold';
      default:
        return '';
    }
  };

  const getStatusLabel = (status: Project['status']) => {
    switch (status) {
      case 'active':
        return 'Ativo';
      case 'completed':
        return 'Concluído';
      case 'on-hold':
        return 'Pausado';
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Hoje';
    if (diffDays === 1) return 'Ontem';
    if (diffDays < 7) return `${diffDays} dias atrás`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} semanas atrás`;
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="recent-projects">
      <div className="projects-header">
        <h3>Projetos Recentes</h3>
        <span className="projects-count">{projects.length} projetos</span>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-info">
              <h4 className="project-name">{project.name}</h4>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-meta">
              <span className={`project-status ${getStatusColor(project.status)}`}>
                {getStatusLabel(project.status)}
              </span>
              <span className="project-date">{formatDate(project.lastUpdate)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
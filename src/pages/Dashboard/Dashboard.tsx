import React from 'react';
import MetricCard from '../../components/MetricCard/MetricCard';
import RecentProjects from '../../components/RecentProjects/RecentProjects';
import { dashboardData } from '../../data/dashboard';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { metrics, projects } = dashboardData;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Painel de Métricas</h2>
        <p className="dashboard-update">Última atualização: Hoje, 10:30</p>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            change={metric.change}
            changeType={metric.changeType}
          />
        ))}
      </div>

      <div className="projects-section">
        <RecentProjects projects={projects} />
      </div>
    </div>
  );
};

export default Dashboard;
import React from 'react';

import ActivityChart from '../../components/ActivityChart/ActivityChart';

import './Analytics.css';

const Analytics: React.FC = () => {
  return (
    <div className="analytics">
      <div className="analytics-header">
        <div>
          <h2>Analytics</h2>

          <p>
            Acompanhe a atividade e evolução dos projetos.
          </p>
        </div>
      </div>

      <div className="analytics-content">
        <ActivityChart />
      </div>
    </div>
  );
};

export default Analytics;
import React from 'react';
import './MetricCard.css';

interface MetricCardProps {
  title: string;
  value: number;
  icon: string;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon,
  change = 0,
  changeType = 'neutral'
}) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const getChangeColor = () => {
    switch (changeType) {
      case 'increase':
        return 'metric-change-increase';
      case 'decrease':
        return 'metric-change-decrease';
      default:
        return 'metric-change-neutral';
    }
  };

  return (
    <div className="metric-card">
      <div className="metric-header">
        <div className="metric-icon">{icon}</div>
        <span className="metric-title">{title}</span>
      </div>
      <div className="metric-value">{formatNumber(value)}</div>
      {change !== 0 && (
        <div className={`metric-change ${getChangeColor()}`}>
          {changeType === 'increase' ? '↑' : '↓'} {Math.abs(change)}%
        </div>
      )}
    </div>
  );
};

export default MetricCard;
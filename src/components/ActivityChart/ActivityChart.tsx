import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import './ActivityChart.css';

interface ActivityData {
  day: string;
  commits: number;
}

const activityData: ActivityData[] = [
  { day: 'Seg', commits: 8 },
  { day: 'Ter', commits: 14 },
  { day: 'Qua', commits: 6 },
  { day: 'Qui', commits: 18 },
  { day: 'Sex', commits: 22 },
  { day: 'Sáb', commits: 10 },
  { day: 'Dom', commits: 16 }
];

const ActivityChart: React.FC = () => {
  return (
    <section className="activity-chart">
      <div className="activity-chart-header">
        <div>
          <h3>Atividade de desenvolvimento</h3>

          <p>
            Commits realizados nos últimos 7 dias
          </p>
        </div>
      </div>

      <div className="activity-chart-content">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart
            data={activityData}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="commits"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{
                r: 5
              }}
              activeDot={{
                r: 7
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ActivityChart;
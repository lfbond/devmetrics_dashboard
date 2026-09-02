// Tipos para os dados do dashboard
export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'on-hold';
  lastUpdate: string;
}

export interface MetricCardData {
  id: string;
  title: string;
  value: number;
  icon: string;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
}

export interface DashboardData {
  metrics: MetricCardData[];
  projects: Project[];
}

export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}
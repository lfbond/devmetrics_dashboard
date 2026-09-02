import { DashboardData, Project, MetricCardData, SidebarItem } from '../types/dashboard';

// Dados mockados para métricas
export const mockMetrics: MetricCardData[] = [
  {
    id: '1',
    title: 'Total Projetos',
    value: 23,
    icon: '📊',
    change: 12.5,
    changeType: 'increase'
  },
  {
    id: '2',
    title: 'Commits',
    value: 1456,
    icon: '📝',
    change: 8.2,
    changeType: 'increase'
  },
  {
    id: '3',
    title: 'Issues Abertas',
    value: 34,
    icon: '🐛',
    change: -5.1,
    changeType: 'decrease'
  },
  {
    id: '4',
    title: 'Deploys',
    value: 89,
    icon: '🚀',
    change: 15.3,
    changeType: 'increase'
  }
];

// Dados mockados para projetos recentes
export const mockProjects: Project[] = [
  {
    id: 'p1',
    name: 'DevMetrics Dashboard',
    description: 'Dashboard para métricas de desenvolvimento',
    status: 'active',
    lastUpdate: '2026-09-02T10:30:00'
  },
  {
    id: 'p2',
    name: 'E-commerce API',
    description: 'API REST para plataforma de e-commerce',
    status: 'active',
    lastUpdate: '2026-09-01T15:45:00'
  },
  {
    id: 'p3',
    name: 'Mobile App',
    description: 'Aplicativo mobile cross-platform',
    status: 'on-hold',
    lastUpdate: '2026-08-30T09:20:00'
  },
  {
    id: 'p4',
    name: 'Migration System',
    description: 'Sistema de migração de dados legados',
    status: 'completed',
    lastUpdate: '2026-08-28T14:10:00'
  }
];

// Itens do sidebar
export const sidebarItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊', active: true },
  { id: 'projects', label: 'Projetos', icon: '📁', active: false },
  { id: 'analytics', label: 'Analytics', icon: '📈', active: false },
  { id: 'settings', label: 'Configurações', icon: '⚙️', active: false }
];

// Dados completos do dashboard
export const dashboardData: DashboardData = {
  metrics: mockMetrics,
  projects: mockProjects
};
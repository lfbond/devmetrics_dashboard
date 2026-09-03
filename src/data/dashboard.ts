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
  /* {
    id: '3',
    title: 'Issues Abertas',
    value: 34,
    icon: '🐛',
    change: -5.1,
    changeType: 'decrease'
  }, */
  {
    id: '3',
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
    description: 'Dashboard de métricas de desenvolvimento com React e TypeScript',
    status: 'active',
    lastUpdate: '2026-09-03T12:00:00'
  },
  {
    id: 'p2',
    name: 'DT Money',
    description: 'Aplicação para gerenciamento e acompanhamento de transações financeiras',
    status: 'completed',
    lastUpdate: '2026-08-30T12:00:00'
  },
  {
    id: 'p3',
    name: 'Pokémon List',
    description: 'Aplicação Front-end para consulta e exibição de Pokémon',
    status: 'completed',
    lastUpdate: '2026-08-28T12:00:00'
  },
  {
    id: 'p4',
    name: 'Landing Page DNC',
    description: 'Landing page responsiva desenvolvida para prática de interfaces modernas',
    status: 'completed',
    lastUpdate: '2026-08-26T12:00:00'
  }
];

// Itens do sidebar
export const sidebarItems: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '📊',
    path: '/'
  },
  {
    id: 'projects',
    label: 'Projetos',
    icon: '📁',
    path: '/projects'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: '📈',
    path: '/analytics'
  },
  {
    id: 'settings',
    label: 'Configurações',
    icon: '⚙️',
    path: '/settings'
  }
];

// Dados completos do dashboard
export const dashboardData: DashboardData = {
  metrics: mockMetrics,
  projects: mockProjects
};
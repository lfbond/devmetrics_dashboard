# DevMetrics Dashboard

> Um painel para acompanhar a evolução dos meus projetos de desenvolvimento em um único lugar.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/Style-CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-F59E0B)](#roadmap)

## Sobre o projeto

O **DevMetrics Dashboard** é uma aplicação web construída para transformar atividade de desenvolvimento em uma visão rápida, organizada e útil para acompanhamento de projetos.

Esta primeira versão apresenta uma interface responsiva com métricas, variações percentuais e uma lista de projetos recentes. Os dados exibidos atualmente são mockados e tipados; a próxima grande evolução será conectá-los à API do GitHub para refletir o estado real dos repositórios.

## O que já está funcionando

- Layout responsivo para desktop e dispositivos móveis.
- Header com identificação do produto e usuário.
- Sidebar com navegação visual para as áreas do dashboard.
- Cards reutilizáveis para métricas de projetos, commits, issues e deploys.
- Indicadores de crescimento, queda e estado neutro.
- Lista de projetos recentes com status e data da última atualização.
- Dados organizados por interfaces TypeScript (`Project`, `MetricCardData`, `DashboardData` e `SidebarItem`).

## Preview da experiência

O dashboard atual contém quatro indicadores principais:

| Indicador | Objetivo |
| --- | --- |
| Total de projetos | Acompanhar a quantidade de projetos monitorados |
| Commits | Visualizar volume recente de contribuições |
| Issues abertas | Identificar pendências que precisam de atenção |
| Deploys | Acompanhar a frequência de entregas |

## Tecnologias

- React 19
- TypeScript 4.9
- React Scripts 5
- CSS responsivo
- Create React App

## Como executar localmente

### Pré-requisitos

- Node.js 18 ou superior
- npm

### Instalação

```bash
git clone https://github.com/lfbond/devmetrics_dashboard.git
cd devmetrics_dashboard
npm install
npm start
```

O projeto será aberto em `http://localhost:3000`.

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura do projeto

```text
src/
├── components/
│   ├── Header/
│   ├── MetricCard/
│   ├── RecentProjects/
│   └── Sidebar/
├── data/              # Dados mockados da versão atual
├── pages/Dashboard/   # Composição da tela principal
├── types/             # Contratos TypeScript
├── App.tsx
└── index.js
```

## Roadmap

### Próxima etapa: integração com a API do GitHub

A próxima evolução do projeto é substituir os dados mockados por dados reais dos meus repositórios no GitHub. A integração será planejada para:

1. Configurar o usuário ou organização monitorada por variável de ambiente.
2. Consumir repositórios, commits, issues, pull requests, releases e workflows.
3. Mapear a resposta da API para os contratos internos do dashboard.
4. Calcular métricas por período e exibir a data real da última sincronização.
5. Adicionar estados de carregamento, erro, vazio e limite de requisições.
6. Implementar cache e atualização controlada para reduzir chamadas à API.
7. Exibir links diretos para os repositórios e atividades no GitHub.

### Evoluções planejadas

- Gráficos de commits, issues e deploys ao longo do tempo.
- Filtros por período, repositório e status.
- Página detalhada para cada projeto.
- Autenticação segura com GitHub OAuth, quando necessária.
- Testes unitários e de componentes.
- Pipeline de CI para lint, testes e build.
- Deploy da aplicação em uma plataforma pública.

## Objetivos técnicos

Além de acompanhar projetos, este repositório demonstra práticas que fazem parte do meu processo de desenvolvimento:

- Componentização e reaproveitamento de UI.
- Tipagem explícita para reduzir erros de integração.
- Separação entre dados, componentes, páginas e tipos.
- Responsividade e foco em uma experiência de leitura rápida.
- Evolução incremental, começando por uma base funcional e preparada para dados reais.

## Status

🚧 Projeto em desenvolvimento. A interface inicial está pronta com dados mockados; a integração com a API do GitHub é a próxima entrega principal.

## Autor

Desenvolvido por **Luís Felipe Bond**.

- GitHub: [@lfbond](https://github.com/lfbond)
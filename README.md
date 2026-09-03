# DevMetrics Dashboard

> Painel web para acompanhar a atividade e a evolução de projetos de desenvolvimento.
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-f59e0b)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=20232a)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178c6?logo=typescript&logoColor=ffffff)

## Visão geral

O **DevMetrics Dashboard** é uma aplicação React criada para centralizar indicadores de desenvolvimento em uma interface objetiva, responsiva e componentizada. A versão atual valida a experiência visual, a navegação e os contratos de dados com informações mockadas, preparando a base para uma futura integração com a GitHub API.

## Status atual

**Em desenvolvimento.** A primeira versão funcional está disponível com dados locais e contempla as páginas Dashboard e Analytics. Ainda não há integração com a GitHub API, autenticação ou persistência de dados.

## Demonstração visual

Adicione as capturas de tela em `docs/screenshots/` para documentar a evolução da interface. Os nomes abaixo já estão reservados para uso no README:


Dashboard 

<img width="1616" height="911" alt="Img-01-Dashboard" src="https://github.com/user-attachments/assets/3fb405b4-1b96-4b7f-9bdf-f38a28796b90" />

Métricas e projetos recentes


Analytics

<img width="1615" height="919" alt="Img-02-Dashboard-Analitcs" src="https://github.com/user-attachments/assets/2efed9dd-93f0-4f11-98e8-8ef852c7bb92" />

Atividade de commits dos últimos sete dias


## Funcionalidades implementadas

- Layout responsivo com Header, Sidebar e área de conteúdo.
- Dashboard com cards de Total de Projetos, Commits e Deploys.
- Indicadores de variação das métricas.
- Lista de projetos recentes com status, descrição e última atualização.
- Página de Analytics com gráfico de linha responsivo.
- Navegação lateral com indicação da rota ativa.
- Componentes reutilizáveis e dados tipados com TypeScript.

### Limitações conhecidas

Os dados exibidos estão centralizados em `src/data/dashboard.ts` e são exclusivamente mockados. As opções **Projetos** e **Configurações** aparecem na navegação, mas ainda não possuem páginas implementadas.

## Tecnologias

- React 19
- TypeScript 4.9
- React Router DOM 7
- Recharts 3
- CSS3 com Grid, Flexbox e media queries
- Create React App via React Scripts

## Estrutura do projeto

```text
src/
├── components/
│   ├── ActivityChart/     # Gráfico de atividade
│   ├── Header/            # Cabeçalho da aplicação
│   ├── MetricCard/        # Cards de métricas
│   ├── RecentProjects/    # Projetos recentes
│   └── Sidebar/           # Navegação lateral
├── data/
│   └── dashboard.ts       # Dados mockados do dashboard
├── pages/
│   ├── Analytics/         # Página de análises
│   └── Dashboard/         # Página principal
npm install
npm start
```

A aplicacao ficara disponivel em `http://localhost:3000`.

### Build de producao

```bash
npm run build
```

### Testes

```bash
npm test
```

## Roadmap

### Fase 1 — Base do Dashboard ✅

- [x] Criar o projeto React com TypeScript.
- [x] Criar o layout principal.
- [x] Criar Header e Sidebar.
- [x] Criar componente reutilizável de métricas.
- [x] Renderizar métricas a partir de dados tipados.
- [x] Criar a listagem de projetos recentes.
- [x] Implementar a responsividade inicial.

### Fase 2 — Refinamento da interface ✅

- [x] Implementar a navegação entre Dashboard e Analytics.
- [x] Adicionar o gráfico de atividade de commits.
- [x] Aplicar layout responsivo aos componentes da aplicação.
- [x] Organizar a interface em componentes reutilizáveis.
- [x] Estruturar a navegação lateral com indicação da rota ativa.

### Fase 3 — GitHub API

- [ ] Criar a camada de serviços para comunicação com a API.
- [ ] Buscar repositórios reais.
- [ ] Obter métricas de commits e issues.
- [ ] Mapear respostas externas para os tipos internos.
- [ ] Implementar estados de carregamento, erro e lista vazia.
- [ ] Tratar o limite de requisições.
- [ ] Exibir a data real da última sincronização.
- [ ] Adicionar links para os repositórios.

### Fase 4 — Qualidade e publicação

- [ ] Adicionar testes de componentes.
- [ ] Configurar lint.
- [ ] Criar pipeline de CI para testes e build.
- [ ] Publicar a aplicação.
- [ ] Adicionar screenshots e demonstração ao README.

### Fase 5 — Evolução do produto

- [ ] Implementar a página detalhada por projeto.
- [ ] Criar histórico de atividade.
- [ ] Adicionar novas métricas e visualizações.
- [ ] Criar filtros por período e projeto.
- [ ] Implementar autenticação OAuth caso o escopo exija.

## Autor

Desenvolvido por **Luis Felipe Bond**.

- GitHub: [@lfbond](https://github.com/lfbond)
- Repositorio: [lfbond/devmetrics_dashboard](https://github.com/lfbond/devmetrics_dashboard)

## Licenca

Este projeto esta disponivel sob a licenca definida no arquivo [LICENSE](LICENSE).

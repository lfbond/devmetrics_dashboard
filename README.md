# 📊 DevMetrics Dashboard

> Dashboard desenvolvido com React e TypeScript para acompanhar métricas de projetos de desenvolvimento e evoluir progressivamente para dados reais da API do GitHub.

## 🚀 Sobre o projeto

O **DevMetrics Dashboard** é uma aplicação web criada para centralizar indicadores de desenvolvimento em uma interface simples, responsiva e reutilizável.

A primeira versão foi construída com **React + TypeScript** e utiliza dados mockados para validar a estrutura visual, a componentização, os contratos de dados e a experiência do dashboard antes da integração com serviços externos.

O objetivo das próximas versões é substituir gradualmente os dados simulados por informações reais de repositórios, commits, issues e outras atividades obtidas por meio da **GitHub API**.

> **Estado atual:** a interface principal está funcional, mas as métricas e projetos exibidos ainda são dados simulados.

## ✅ Funcionalidades atuais

* Layout de dashboard responsivo
* Header e Sidebar separados em componentes
* Cards reutilizáveis para métricas
* Métricas de projetos, commits, issues e deploys
* Indicadores de crescimento, queda e estado neutro
* Listagem de projetos recentes
* Renderização dinâmica de dados com `.map()`
* Tipagem das estruturas principais com TypeScript
* Separação entre componentes, dados, páginas e tipos

## 🧠 Conceitos praticados

* Componentização em React
* Props tipadas
* Interfaces TypeScript
* Renderização de listas
* Reutilização de componentes
* Organização de dados mockados
* Separação de responsabilidades
* CSS Grid e Flexbox
* Design responsivo
* Estrutura preparada para consumo futuro de API REST

## 🛠️ Tecnologias

* React 19
* TypeScript 4.9
* CSS3
* React Scripts / Create React App
* Git e GitHub

## 📁 Estrutura

```text
src/
├── components/
│   ├── Header/
│   ├── MetricCard/
│   ├── RecentProjects/
│   └── Sidebar/
├── data/
│   └── dashboard.ts
├── pages/
│   └── Dashboard/
├── types/
│   └── dashboard.ts
├── App.tsx
├── App.css
├── index.js
└── index.css
```

## 📊 Métricas

| Métrica           | Objetivo                                      |
| ----------------- | --------------------------------------------- |
| Total de projetos | Exibir a quantidade de projetos monitorados   |
| Commits           | Representar o volume recente de contribuições |
| Issues abertas    | Destacar pendências dos projetos              |
| Deploys           | Representar entregas/publicações realizadas   |

Atualmente esses valores são **mockados** e servem para validar a experiência da aplicação.

## ▶️ Como executar

```bash
git clone https://github.com/lfbond/devmetrics_dashboard.git
cd devmetrics_dashboard
npm install
npm start
```

Para gerar a versão de produção:

```bash
npm run build
```

## 🗺️ Roadmap

### Fase 1 — Base do Dashboard ✅

* [x] Criar projeto React + TypeScript
* [x] Criar layout principal
* [x] Criar Header e Sidebar
* [x] Criar componente reutilizável de métricas
* [x] Renderizar métricas a partir de dados tipados
* [x] Criar listagem de projetos recentes
* [x] Implementar responsividade inicial

### Fase 2 — Refinamento da interface

* [ ] Substituir projetos fictícios por projetos reais do portfólio
* [ ] Melhorar semântica e acessibilidade da navegação
* [ ] Adicionar estados de foco para teclado
* [ ] Remover arquivos padrão não utilizados do CRA
* [ ] Converter `index.js` para `index.tsx`
* [ ] Adicionar gráfico de atividade
* [ ] Criar filtros por período/projeto
* [ ] Melhorar comportamento mobile da Sidebar

### Fase 3 — GitHub API

* [ ] Criar camada de serviços para comunicação com a API
* [ ] Buscar repositórios reais
* [ ] Obter métricas de commits e issues
* [ ] Mapear respostas externas para os tipos internos
* [ ] Implementar loading, erro e estado vazio
* [ ] Tratar limite de requisições
* [ ] Exibir data real da última sincronização
* [ ] Adicionar links para os repositórios

### Fase 4 — Qualidade

* [ ] Adicionar testes de componentes
* [ ] Configurar lint
* [ ] Criar pipeline de CI para testes e build
* [ ] Publicar a aplicação
* [ ] Adicionar screenshot e demonstração ao README

### Fase 5 — Futuro

* [ ] Página detalhada por projeto
* [ ] Histórico de atividade
* [ ] Novas métricas e visualizações
* [ ] GitHub OAuth caso o escopo exija autenticação

## 🎯 Próxima entrega

Antes da integração com a GitHub API:

1. substituir projetos fictícios por projetos reais;
2. melhorar acessibilidade da Sidebar;
3. converter o entrypoint para TypeScript;
4. adicionar o primeiro gráfico;
5. publicar a aplicação;
6. então iniciar a integração com dados reais.

## 📌 Status

🚧 **Em desenvolvimento.**

A primeira interface está pronta e funcional com dados mockados. O próximo marco é o refinamento da V1 seguido da integração com dados reais.

## 👨‍💻 Autor

Desenvolvido por **Luís Felipe Bond**.

GitHub: @lfbond

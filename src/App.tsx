import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import { sidebarItems } from './data/dashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <div className="app-sidebar">
          <Sidebar items={sidebarItems} />
        </div>
        <div className="app-content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
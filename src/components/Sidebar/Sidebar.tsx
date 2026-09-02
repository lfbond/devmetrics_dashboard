import React from 'react';
import { SidebarItem } from '../../types/dashboard';
import './Sidebar.css';

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        {items.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${item.active ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-version">v1.0.0</div>
      </div>
    </aside>
  );
};

export default Sidebar;
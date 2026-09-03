import React from 'react';
import { SidebarItem } from '../../types/dashboard';
import './Sidebar.css';

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <aside className="sidebar" aria-label="Navegação principal">
      <nav className="sidebar-menu">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`sidebar-item ${item.active ? 'active' : ''}`}
            aria-current={item.active ? 'page' : undefined}
          >
            <span className="sidebar-icon" aria-hidden="true">
              {item.icon}
            </span>

            <span className="sidebar-label">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="sidebar-version">v1.0.0</span>
      </div>
    </aside>
  );
};

export default Sidebar;
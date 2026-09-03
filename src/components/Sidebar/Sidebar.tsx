import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarItem } from '../../types/dashboard';
import './Sidebar.css';

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <aside
      className="sidebar"
      aria-label="Navegação principal"
    >
      <nav className="sidebar-menu">
        {items.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `sidebar-item ${
                isActive ? 'active' : ''
              }`
            }
          >
            <span
              className="sidebar-icon"
              aria-hidden="true"
            >
              {item.icon}
            </span>

            <span className="sidebar-label">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="sidebar-version">
          v1.0.0
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
import React from "react";

function Sidebar({ isVisible, activePage, setActivePage }) {
  const links = [
    { name: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { name: 'Projects', icon: 'fas fa-project-diagram' },
    { name: 'Tasks', icon: 'fas fa-tasks' },
    { name: 'Reports', icon: 'fas fa-chart-line' },
    { name: 'Settings', icon: 'fas fa-cog' },
  ];

  return (
    <nav className={`sidebar ${!isVisible ? 'hide' : ''}`} id="sidebar">
      {links.map(link => (
        <a
          key={link.name}
          href="javascript:void(0)"
          className={activePage === link.name ? 'active' : ''}
          onClick={() => setActivePage(link.name)}
        >
          <i className={`${link.icon} me-2`}></i> {link.name}
        </a>
      ))}
    </nav>
  );
}

export default Sidebar;

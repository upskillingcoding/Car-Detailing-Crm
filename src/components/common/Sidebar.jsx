import React from "react";
import {Link} from 'react-router-dom';
function Sidebar({ isVisible, activePage, setActivePage }) {
  const links = [
    { name: 'dashboard', icon: 'fas fa-tachometer-alt' },
    { name: 'usermaster', icon: 'fas fa-user' },
    { name: 'clientmaster', icon: 'fas fa-users' },
    { name: 'itemmaster', icon: 'fas fa-clipboard-list' },
    { name: 'invoicemaster', icon: 'fas fa-file-invoice' },
  ];
  console.log("links ", links);
  console.log("link123 ", links.map(link => link.name))
  return (
    <nav className={`sidebar ${!isVisible ? 'hide' : ''}`} id="sidebar">
      {links.map(link => (
        <Link
          key={link.name}
          to={`/${link.name}`}
          className={activePage === link.name ? 'active' : ''}
          onClick={() => setActivePage(link.name)}
        >
          <i className={`${link.icon} me-2`}></i> {link.name}
        </Link>
      ))}
    </nav>
  );
}
export default Sidebar;

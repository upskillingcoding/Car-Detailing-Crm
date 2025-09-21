import React from "react";

function Head({ onToggleSidebar }) {
  return (
    <header className="main-header d-flex justify-content-between align-items-center px-3">
  
      <button
        className="btn btn-link text-white"
        onClick={onToggleSidebar}
      >
        <i className="fas fa-bars fa-lg"></i>
      </button>

      <h4 className="mb-0 text-white">🚀 Car-Crm Detailing</h4>

      <div className="dropdown">
        <a href="#" className="text-white dropdown-toggle" data-bs-toggle="dropdown">
          <i className="fas fa-user-circle fa-2x"></i>
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Logout</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Head;

import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Head from './components/common/head.jsx';
import Sidebar from './components/common/Sidebar.jsx';
import Content from './components/common/Content.jsx';
import { BrowserRouter } from 'react-router-dom';
function RootLayout() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [activePage, setActivePage] = useState('Dashboard');

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };
  return (
    <>
      <Head onToggleSidebar={toggleSidebar} />
      <Sidebar
        isVisible={sidebarVisible}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <Content sidebarVisible={sidebarVisible}/>
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RootLayout />
    </BrowserRouter>
  </StrictMode>
);
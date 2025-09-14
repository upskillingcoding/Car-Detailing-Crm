import React from "react";
import Dashboard from "../Dashboard";
import Usermaster from "../usermaster";
import Clientmaster from "../clientmaster";
import Itemmaster from "../Itemmaster";
import Invoicemaster from "../Invoicemaster";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function Content({ sidebarVisible }) {
  return (
    <main className={`content ${!sidebarVisible ? 'full' : ''}`} id="mainContent">
      {/* <BrowserRouter> */}
          <Routes>
              <Route path='/dashboard' element={<Dashboard /> } />
              <Route path='/usermaster' element={<Usermaster /> } />
              <Route path='/clientmaster' element={<Clientmaster /> } />
              <Route path='/itemmaster' element={<Itemmaster /> } />
              <Route path='/invoicemaster' element={<Invoicemaster /> } />
          </Routes>
      {/* </BrowserRouter> */}
    </main>
  );
}
export default Content;

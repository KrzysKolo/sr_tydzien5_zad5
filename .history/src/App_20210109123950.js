import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import SidebarContextProvider from './components/contexts/SidebarContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './components/sass/styles.scss';

const App = () => {
  return (
    <main className="app">
      <SidebarContextProvider >
        <Sidebar />
      </SidebarContextProvider>
      <div className="app__page">
        <div className="navbar">
          Navbar

        </div>
        <div className="dashboard">
          Dahsboard
        </div>
      </div>

    </main>
  )
}

export default App;

import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { Dashboard } from './components/dashboard/';
import SidebarContextProvider from './components/contexts/SidebarContext';
import { BrowserRouter as Router} from 'react-router-dom';
import './components/sass/styles.scss';

const App = () => {
  return (
    <Router>
      <main className="app">
        <SidebarContextProvider >
          <Sidebar />
        </SidebarContextProvider>
        <div className="app__page">
          <div className="navbar">
              Navbar
          </div>
          <Dashboard />
        </div>
      </main>
    </Router>
  )
}

export default App;

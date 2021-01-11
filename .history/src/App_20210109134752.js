import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import SidebarContextProvider from './components/contexts/SidebarContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { About, Contact, Home, Users } from './components/pages/';
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
          <div className="dashboard">
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Users" component={Users} />
          </div>
        </div>
      </main>
    </Router>
  )
}

export default App;

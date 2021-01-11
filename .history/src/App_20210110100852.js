import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import SidebarContextProvider from './components/contexts/SidebarContext';
import SerchUserContextProvider from './components/contexts/SidebarContext';
import Sidebar from './components/sidebar/Sidebar';
import { Dashboard } from './components/dashboard/';
import { Header } from './components/header/';
import './components/sass/styles.scss';
import { SerchUserContext } from './components/contexts/SerchUserContext';

const App = () => {
  return (
    <Router>
      <main className="app">
        <SidebarContextProvider >
          <Sidebar />
        </SidebarContextProvider>
        <section className="app__page">
          <Header />
          <SerchUserContextProvider>
            <Dashboard />
          </SerchUserContextProvider>
        </section>
      </main>
    </Router>
  )
}

export default App;

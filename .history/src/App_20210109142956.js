import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { Dashboard } from './components/dashboard/';
import { Header } from './components/header/';
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
        <section className="app__page">
          <Header />
          <Dashboard />
        </section>
      </main>
    </Router>
  )
}

export default App;

import React from 'react';
import { Menu, User, ButtonMenu } from './components/Sidebar/'
import './components/sass/styles.scss';

const App = () => {
  return (
    <main className="app">
      <div className="sidebar">
        <User className="sidebar__section" />
        <ButtonMenu />
        <Menu className="sidebar__section"  />
      </div>
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

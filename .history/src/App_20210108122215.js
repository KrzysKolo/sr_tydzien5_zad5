import React from 'react';
import { Menu, User } from './components/Sidebar/'
import './components/sass/styles.scss';

const App = () => {
  return (
    <main className="app">
      <div className="sidebar"> Sidebar
        <User />
        <Menu />
      </div>
      <div className="app__page">
        <div className="navbar">
          Navbar

        </div>
      </div>
      <div className="dashboard">
        Dahsboard
      </div>

    </main>
  )
}

export default App;

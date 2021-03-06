import React from 'react';
import { Menu } from './components/Menu/'
import './App.css';

const App = () => {
  return (
    <main className="App">
      <div className="sidebar"> Sidebar </div>
      <div className="app_page">
        <div className="navbar">
          Navbar
          <Menu />
        </div>
      </div>
      <div className="dashboard">
        Dahsboard
      </div>

    </main>
  )
}

export default App;

import React from 'react';
import { Menu } from './components/Menu/'
import './App.css';

const App = () => {
  return (
    <main className="App">
      <div className="sidebar"> Sidebar
        <User />
        <Menu />
      </div>
      <div className="app_page">
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

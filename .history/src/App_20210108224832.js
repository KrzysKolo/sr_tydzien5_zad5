import React from 'react';
import { Menu, User, ButtonMenu } from './components/sidebar/';
import SidebarContextProvider from './components/contexts/SidebarContext';
import './components/sass/styles.scss';

const App = () => {
  return (
    <main className="app">
      <SidebarContextProvider >
        <div className="sidebar">
          <User />
          <ButtonMenu  />
          <Menu  />
        </div>
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

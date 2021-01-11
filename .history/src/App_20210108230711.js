import React from 'react';
import { Menu, User, ButtonMenu, Sidebar } from './components/sidebar/';
import SidebarContextProvider from './components/contexts/SidebarContext';
import './components/sass/styles.scss';

const App = () => {
  return (
    <main className="app">
      <SidebarContextProvider >
        <Sidebar className="sidebar">
          <User />
          <ButtonMenu  />
          <Menu  />
        </Sidebar>
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

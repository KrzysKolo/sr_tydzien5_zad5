import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import SidebarContextProvider from './components/contexts/SidebarContext';
import user from './components/img/user.jpg';
import './components/sass/styles.scss';

const App = () => {
  return (
    <main className="app">
      <SidebarContextProvider >
        <Sidebar img={user} />
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

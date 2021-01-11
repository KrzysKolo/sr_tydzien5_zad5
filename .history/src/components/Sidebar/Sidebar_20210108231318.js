import React from 'react';
import { User, ButtonMenu, Menu } from './sidebarComponents/'


const Sidebar = () => {
  return (
    <div  className="sidebar">
      <User />
      <ButtonMenu  />
      <Menu  />
    </div>
 )
}

export default Sidebar;

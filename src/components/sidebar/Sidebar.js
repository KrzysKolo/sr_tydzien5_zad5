import React, { useContext } from 'react';
import { SidebarContext } from './../contexts/SidebarContext';
import { User, ButtonMenu, Menu } from './sidebarComponents/';

const Sidebar = () => {
	const { showSidebar } = useContext(SidebarContext);

	return (
		<div  className={showSidebar ? 'sidebar sidebar-close' : 'sidebar'} >
      <User />
      <ButtonMenu  />
			<Menu />
    </div>
 )
}

export default Sidebar;

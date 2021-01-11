import React, { useContext } from 'react';
import { SidebarContext } from './../contexts/SidebarContext';
import { User, ButtonMenu, Menu } from './sidebarComponents/';


const Sidebar = () => {
	const { showSidebar, setShowSidebar } = useContext(SidebarContext);

	return (
		<div  className={showSidebar ? 'sidebar' : 'sidebar sidebar-close'} >
      <User />
      <ButtonMenu  />
			<Menu />
    </div>
 )
}

export default Sidebar;

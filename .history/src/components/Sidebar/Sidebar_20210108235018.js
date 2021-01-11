import React, { useContext } from 'react';
import { SidebarContext } from './../contexts/SidebarContext';
import { User, ButtonMenu, Menu } from './sidebarComponents/';


const Sidebar = () => {
	const { status, setStatus } = useContext(SidebarContext);

	return (
		<div  className="sidebar">
      <User />
      <ButtonMenu  />
			<Menu />
    </div>
 )
}

export default Sidebar;

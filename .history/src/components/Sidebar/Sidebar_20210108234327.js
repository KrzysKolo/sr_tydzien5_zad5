import React, { useContext } from 'react';
import { SidebarContext } from './../contexts/SidebarContext';
import { User, ButtonMenu, Menu } from './sidebarComponents/';


const Sidebar = () => {
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	return (
		<div  className="sidebar" style={{ width: '300px'}}>
      <User />
      <ButtonMenu  />
			<Menu />
    </div>
 )
}

export default Sidebar;

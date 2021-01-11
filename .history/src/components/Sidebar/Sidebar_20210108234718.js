import React, { useContext } from 'react';
import { SidebarContext } from './../contexts/SidebarContext';
import { User, ButtonMenu, Menu } from './sidebarComponents/';


const Sidebar = () => {
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const handeChangeSidebar = () => {
		isOpen ? console.log('open') : console.log('close');
	}
	return (
		<div  className="sidebar" onClick={handeChangeSidebar}>
      <User />
      <ButtonMenu  />
			<Menu />
    </div>
 )
}

export default Sidebar;

import React, { useContext } from 'react';
import { SidebarContext } from './../contexts/SidebarContext';
import { User, ButtonMenu, Menu } from './sidebarComponents/';


const Sidebar = () => {
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const handeChangeSidebar = () => {
		isOpen ? console.log('open') : console.log('close');
		setIsOpen(!isOpen);
	}
	return (
		<div  className="sidebar">
      <User />
      <ButtonMenu onClick={handeChangeSidebar} />
			<Menu />
    </div>
 )
}

export default Sidebar;

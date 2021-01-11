import React, { useContext } from 'react';
import { SidebarContext } from './../contexts/SidebarContext';
import { User, ButtonMenu, Menu } from './sidebarComponents/';


const Sidebar = () => {
	const { variants, setVariants } = useContext(SidebarContext);

	return (
		<div  className="sidebar" variants={variants}>
      <User />
      <ButtonMenu  />
			<Menu />
    </div>
 )
}

export default Sidebar;

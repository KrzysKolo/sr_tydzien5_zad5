import React, { useContext } from 'react';
import { SidebarContext } from './../contexts/SidebarContext';
import { User, ButtonMenu, Menu } from './sidebarComponents/';


const Sidebar = () => {
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const variants = {
    show: {
        transform: "translateX(100%)",

    },
    hide: {
        transform: "translateX(35px)",

    },
}
  return (
		<div  className="sidebar">
      <User />
      <ButtonMenu  />
			<Menu />
    </div>
 )
}

export default Sidebar;

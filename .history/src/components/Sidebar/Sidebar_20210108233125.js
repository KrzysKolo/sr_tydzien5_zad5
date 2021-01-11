import React, { useContext } from 'react';
import { SidebarContext } from './../contexts/SidebarContext';
import { User, ButtonMenu, Menu } from './sidebarComponents/';


const Sidebar = () => {
	const { status, setStatus, menuTransition, menuVariants } = useContext(SidebarContext);
	const variants = {
    show: {
        transform: "translateX(100%)",

    },
    hide: {
        transform: "translateX(35px)",
        opacity: 0,
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

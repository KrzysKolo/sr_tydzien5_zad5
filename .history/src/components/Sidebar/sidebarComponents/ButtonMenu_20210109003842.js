import React, { useContext } from 'react';
import { SidebarContext } from './../../contexts/SidebarContext';

const ButtonMenu = () => {
	const { status, setStatus, variants, setVariants  } = useContext(SidebarContext);
	const handleToogle = () => {
		setStatus(status === 'open' ? 'close' : 'open');
		setVariants(variants === 'show' ? menuVariants.hide : menuVariants.show );
	}
	const menuVariants = {
		hide: {
			transform: "translateX(3%)",
		},
		show: {
			transform: "translateX(103%)",
		},
	}

  return (
    <section onClick={handleToogle} className="sidebar-btn-toggle">
      <div className="sidebar-btn-toggle__container">
				<i className={status}></i>
				<i className={status}></i>
				<i className={status}></i>
      </div>
    </section>
  )
}

export default ButtonMenu;

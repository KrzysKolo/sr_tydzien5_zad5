import React, { useContext } from 'react';
import { SidebarContext } from './../../contexts/SidebarContext';

const ButtonMenu = () => {
	const { status, setStatus, showSidebar, setShowSidebar  } = useContext(SidebarContext);
	const handleToogle = () => {
		setStatus(status === 'open' ? 'close' : 'open');

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

import React, { useContext } from 'react';
import { SidebarContext } from './../../contexts/SidebarContext';

const ButtonMenu = () => {
	const { status, setStatus } = useContext(SidebarContext);


	const handleToogle = () => {
		setStatus(status ? 'close' : 'open');
		setStatus(!status);
		status ? console.log('open') : console.log('close');
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

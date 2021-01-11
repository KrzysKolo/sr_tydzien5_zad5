import React, { useState } from 'react';

const ButtonMenu = () => {
	const [status, setStatus] = useState('open');

	const handleToogle = () => {
		console.log("asasasa");
		setStatus(status === 'open' ? 'close' : 'open');
	}
  return (
    <section onClick={handleToogle} className="sidebar-btn-toggle">
      <button type="button" className="sidebar-btn-toggle__container">
				<i className={status}></i>
				<i className={status}></i>
				<i className={status}></i>
      </button>
    </section>
  )
}

export default ButtonMenu;

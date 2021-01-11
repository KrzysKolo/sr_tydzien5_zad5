import React, { useState } from 'react';

const ButtonMenu = () => {
	const [status, setStatus] = useState('open');

	const handleToogle = () => {
		console.log("asasasa");
		setStatus(status === 'open' ? 'close' : 'open');
	}
  return (
    <section onClick={handleToogle} className="sidebar-btn-toggle">
      <input type="button" className="sidebar-btn-toggle__container">
				<span className={status}></span>
				<span className={status}></span>
				<span className={status}></span>
      </input>
    </section>
  )
}

export default ButtonMenu;

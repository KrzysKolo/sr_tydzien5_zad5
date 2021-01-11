import React, { useState } from 'react';

const ButtonMenu = () => {
	const [status, setStatus] = useState('close');

	const handleToogle = () => {
		console.log("asasasa");
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

import React, { useState } from 'react';

const ButtonMenu = () => {
	const [status, setStatus] = useState('open');

	const handleToogle = () => {
		setToogle(!toogle);
		console.log(toogle);
	}
  return (
    <section onClick={handleToogle} className="sidebar-btn-toggle">
      <div className="sidebar-btn-toggle__container">
				<i></i>
				<i></i>
				<i></i>
      </div>
    </section>
  )
}

export default ButtonMenu;

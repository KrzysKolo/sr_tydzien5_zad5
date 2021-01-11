import React, { useState } from 'react';

const ButtonMenu = () => {
	const [toogle, setToogle] = useState(true);

	const handleToogle = () => {
		setToogle(!toogle);
		console.log(toogle);
	}
  return (
    <section onClick={handleToogle} className="sidebar-button-toggle">
      <div className="sidebar-button-toggle__icon">
				<i></i>
				<i></i>
				<i></i>
      </div>
    </section>
  )
}

export default ButtonMenu;

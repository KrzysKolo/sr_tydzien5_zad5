import React, { useState } from 'react';

const ButtonMenu = () => {
	const [toogle, setToogle] = useState(true);

	const handleToogle = () => {
		setToogle(true);
		console.log(toogle);
	}
  return (
    <section onClick={handleToogle} className="sidebar-button-toggle">
      <div className="sidebar-button-toggle__icon">
				<span></span>
				<span></span>
				<span></span>
      </div>
    </section>
  )
}

export default ButtonMenu;

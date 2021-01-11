import React, { useState } from 'react';

const ButtonMenu = () => {
	const [toogle, setToogle] = useState(true);
  return (
    <section className="sidebar-button-toggle">
      <div className="sidebar-button-toggle__icon">
				<span></span>
				<span></span>
				<span></span>
      </div>
    </section>
  )
}

export default ButtonMenu;

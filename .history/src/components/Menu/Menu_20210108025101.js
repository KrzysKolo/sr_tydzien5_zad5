import React from 'react';
import { Link }from './../Link/';
import MenuName from './../Data/MenuName';
const Menu = () => {
  const itemMenu = MenuName.map(item => <Link key={item.id} name={item.title} />);
  return (
    <nav>
			{itemMenu}
    </nav>
  )
}

export default Menu;

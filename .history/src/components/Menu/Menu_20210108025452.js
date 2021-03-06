import React from 'react';
import { Link }from './../Link/';
import MenuName from './../Data/MenuName';
import './styles.scss';

const Menu = () => {
  const itemMenu = MenuName.map(item => <Link key={item.id} name={item.title} />);
  return (
    <nav>
			<ul>
				{itemMenu}
			</ul>
    </nav>
  )
}

export default Menu;

import React from 'react';
import { Link }from './../Link/';
import MenuName from './../Data/MenuName';

const Menu = () => {
  const itemMenu = MenuName.map(item => <Link key={item.id} item={item} />);
  return (
    <nav className="sidebar-nav">
      <ul>
        {itemMenu}
      </ul>
    </nav>
  )
}

export default Menu;

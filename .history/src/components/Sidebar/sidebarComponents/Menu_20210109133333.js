import React from 'react';
import { NavLinks }from './'
import MenuName from './../../data/MenuName';

const Menu = () => {
  const itemMenu = MenuName.map(item => <NavLinks key={item.id} item={item} />);
  return (
    <nav className="sidebar-nav">
      <ul>
        {itemMenu}
      </ul>
    </nav>
  )
}

export default Menu;

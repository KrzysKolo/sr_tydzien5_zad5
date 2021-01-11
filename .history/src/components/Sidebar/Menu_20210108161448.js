import React from 'react';
import { Link }from './../Link/';
import MenuName from './../Data/MenuName';
import './styles.scss';

const Menu = () => {
  const itemMenu = MenuName.map(item => <Link key={item.id} item={item} />);
  return (
    <nav className="sidebar__section">
      <div className="sidebar-nav">
        <ul>
          {itemMenu}
        </ul>
      </div>
    </nav>
  )
}

export default Menu;

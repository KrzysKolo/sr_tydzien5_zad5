import React from 'react';
import { NavLink } from 'react-router-dom';
import IconAwsome from './../IconAwsome';

const NavLinks = ( { item }) => {
  return (
    <li className="sidebar-nav__item"><NavLink to={item.path} exact className="link"><span className="sidebar-nav__item--icon">{item.id ? <IconAwsome parametr={item.id} /> : ""}</span> {item.title}</NavLink></li>
  )
}

export default NavLinks;

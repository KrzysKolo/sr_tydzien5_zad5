import React, { NavLink } from 'react';
import IconAwsome from './../sidebar/sidebarComponents/IconAwsome';

const Link = ( { item }) => {
  return (
    <li className="sidebar-nav__item"><NavLink to="/"><span className="sidebar-nav__item--icon">{item.id ? <IconAwsome parametr={item.id} /> : ""}</span> {item.title}</NavLink></li>
  )
}

export default Link;

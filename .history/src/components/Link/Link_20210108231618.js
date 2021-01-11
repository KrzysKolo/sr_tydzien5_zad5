import React from 'react';
import IconAwsome from './../sidebar/sidebarComponents/IconAwsome';

const Link = ( { item }) => {
  return (
    <li className="sidebar-nav__item"><a href="/"><span className="sidebar-nav__item--icon">{item.id ? <IconAwsome parametr={item.id} /> : ""}</span> {item.title}</a></li>
  )
}

export default Link;

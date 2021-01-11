import React from 'react';
import IconAwsome from './../Sidebar/IconAwsome'

const Link = ( { item }) => {
  return (
    <li className="sidebar-nav__item"><a href="/">{item.id ? <IconAwsome className="sidebar-nav__item-icon" parametr={item.id} /> : ""} {item.title}</a></li>
  )
}

export default Link;

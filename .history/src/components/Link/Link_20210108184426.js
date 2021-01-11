import React from 'react';
import IconAwsome from './../Sidebar/IconAwsome'

const Link = ( { item }) => {
  return (
    <li className="sidebar-nav__item active"><a href="/"><span className="sidebar-nav__item--icon">{item.id ? <IconAwsome parametr={item.id} /> : ""}</span> {item.title}</a></li>
  )
}

export default Link;

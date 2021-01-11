import React from 'react';
import IconAwsome from './../Sidebar/IconAwsome'

const Link = ( { item }) => {
  return (
    <li><a href="/">{item.id ? <IconAwsome parametr={item.id} /> : ""} {item.title}</a></li>
  )
}

export default Link;

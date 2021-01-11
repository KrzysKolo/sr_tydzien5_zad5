import React from 'react';
import IconAwsome from './../Sidebar/IconAwsome'

const Link = ( { item }) => {
  return (
    <li><a href="/"><FontAwesomeIcon icon={faHome}/>{item.icon} {item.title}</a></li>
  )
}

export default Link;

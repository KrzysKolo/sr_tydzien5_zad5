import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Link = ( { item }) => {
  return (
    <li><a href="/"><FontAwesomeIcon icon={item.icon} />{item.title}</a></li>
  )
}

export default Link;

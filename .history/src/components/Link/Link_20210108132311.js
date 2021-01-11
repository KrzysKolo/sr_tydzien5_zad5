import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Link = ( { item }) => {
  return (
    <li><a href="/"><FontAwesomeIcon  xxxx icon={faHome}/>{item.title}</a></li>
  )
}

export default Link;

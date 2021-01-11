import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Link = ( { name }) => {
  return (
    <li><a href="/"><FontAwesomeIcon icon={name.icon} />{name}</a></li>
  )
}

export default Link;

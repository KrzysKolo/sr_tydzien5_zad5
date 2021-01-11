import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
const IconAwsome = ({parametr}) => {
    switch (parametr) {
        case 1: return <FontAwesomeIcon icon={faHome} />;
        cose 2: return <FontAwesomeIcon icon={faHome} />;
        default: return null;
        }


}

export default IconAwsome;
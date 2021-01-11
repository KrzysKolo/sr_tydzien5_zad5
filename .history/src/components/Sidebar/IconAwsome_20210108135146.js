import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faAddressCard} from '@fortawesome/free-solid-svg-icons';
const IconAwsome = ({parametr}) => {
    switch (parametr) {
        case 0: return <FontAwesomeIcon icon={faHome} />;
        case 1: return <FontAwesomeIcon icon={faAddressCard} />;
        case 2: return <FontAwesomeIcon icon={faUser} />;
        case 3: return <FontAwesomeIcon icon={faHome} />;
        default: return null;
        }


}

export default IconAwsome;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faAddressCard} from '@fortawesome/free-solid-svg-icons';
const IconAwsome = ({parametr}) => {
    switch (parametr) {
        case 1: return <FontAwesomeIcon icon={faHome} />;
        case 2: return <FontAwesomeIcon icon={faAddressCard} />;
        case 3: return <FontAwesomeIcon icon={faUser} />;
        case 4: return <FontAwesomeIcon icon={faHome} />;
        default: return null;
        }


}

export default IconAwsome;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserGraduate, faUsersCog, faUmbrellaBeach, faHamburger, faTheaterMasks, faRunning, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
const IconAwsome = ({parametr}) => {
    switch (parametr) {
        case 1: return <FontAwesomeIcon icon={faHome} />;
        case 2: return <FontAwesomeIcon icon={faRunning} />;
        case 3: return <FontAwesomeIcon icon={faHamburger} />;
        case 4: return <FontAwesomeIcon icon={faTheaterMasks} />;
        case 5: return <FontAwesomeIcon icon={faUmbrellaBeach} />;
        case 6: return <FontAwesomeIcon icon={faShoppingBasket} />;
        case 7: return <FontAwesomeIcon icon={faUsersCog} />;
        case 8: return <FontAwesomeIcon icon={faUserGraduate} />;
        default: return null;
        }


}

export default Cat;
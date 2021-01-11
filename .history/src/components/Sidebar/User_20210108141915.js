import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera} from '@fortawesome/free-solid-svg-icons';

const User = () => {
  return (
    <>
      <section className="sidebar-user">
        <div>
          <img className="sidebar-user__awatar" src="https://randomuser.me/api/portraits/women/57.jpg" alt="User" />
          <a href="#" className="sidebar-user__overlay">
            <FontAwesomeIcon className="sidebar-user__icon" icon={faCamera} />
          </a>
        </div>
        <div>
          <h1>Rita Cook</h1>
        </div>
      </section>
    </>
  )
}

export default User;


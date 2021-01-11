import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './../formComponents/';

const UserProfile = ({ user }) => {

  return (
    <div>
      <div className="user-profil">{user.name.title} {user.name.first} {user.name.last} </div>
      <Link className="link-button" to="/users"><Button values="Back" bg="button-back" /></Link>
    </div>
  )
}

export default UserProfile;

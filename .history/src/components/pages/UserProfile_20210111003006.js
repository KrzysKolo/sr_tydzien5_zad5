import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './../formComponents/';

const UserProfile = ({ user }) => {
	console.log(user);
  return (
    <div>
      <div className="user-profil">ssss {user} </div>
      <Link className="link-button" to="/users"><Button values="Back" bg="button-back" /></Link>
    </div>
  )
}

export default UserProfile;

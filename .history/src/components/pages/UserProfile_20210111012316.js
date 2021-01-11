import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from './../formComponents/';

const UserProfile = () => {
	const { id } = useParams();

  return (
    <div>
      <div className="user-profil">ssss {id} </div>
      <Link className="link-button" to="/users"><Button values="Back" bg="button-back" /></Link>
    </div>
  )
}

export default UserProfile;

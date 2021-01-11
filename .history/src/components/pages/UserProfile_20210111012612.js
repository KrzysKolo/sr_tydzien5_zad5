import React, { useContext, useState } from 'react';
import { SearchUserContext } from './../contexts/SearchUserContext';
import { Link, useParams } from 'react-router-dom';
import { Button } from './../formComponents/';

const UserProfile = () => {
	const { users } = useContext(SearchUserContext);
	const { id } = useParams();

  return (
    <div>
      <div className="user-profil">ssss {id} </div>
      <Link className="link-button" to="/users"><Button values="Back" bg="button-back" /></Link>
    </div>
  )
}

export default UserProfile;

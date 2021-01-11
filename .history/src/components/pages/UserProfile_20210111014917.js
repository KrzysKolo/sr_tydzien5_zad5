import React, { useContext, useState, useEffect } from 'react';
import { SearchUserContext } from './../contexts/SearchUserContext';
import { Link, useParams } from 'react-router-dom';
import { Button } from './../formComponents/';

const UserProfile = () => {
	const { users } = useContext(SearchUserContext);
	const { id } = useParams();
	const [user, setUser] = useState([]);

	useEffect(() => {setUser(users.filter(user => user.id === parseInt(id)));},[]);
	console.log(user);

  return (
    <div>
      <div className="user-profil">ssss {id} {user.email}</div>
      <Link className="link-button" to="/users"><Button values="Back" bg="button-back" /></Link>
    </div>
  )
}

export default UserProfile;

import React, { useContext, useState, useEffect } from 'react';
import { SearchUserContext } from './../contexts/SearchUserContext';
import { Link, useParams } from 'react-router-dom';
import { Button } from './../formComponents/';

const UserProfile = () => {
	const { users } = useContext(SearchUserContext);
	const { id } = useParams();
	const [user, setUser] = useState([]);

	useEffect(() => { setUser(users.filter(user => user.id === parseInt(id)) )},[id]);
  const profil = user.map(item => <p key={item.id}>{item.email}</p> )

  return (
    <div>
      <div className="user-profil">ssss {id} {user.email}</div>
			{profil}
      <Link className="link-button" to="/users"><Button values="Back" bg="button-back" /></Link>
    </div>
  )
}

export default UserProfile;

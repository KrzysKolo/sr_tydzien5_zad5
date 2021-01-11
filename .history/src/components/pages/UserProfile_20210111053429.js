import React, { useContext, useState, useEffect } from 'react';
import { SearchUserContext } from './../contexts/SearchUserContext';
import { Link, useParams } from 'react-router-dom';
import { Button } from './../formComponents/';
import { UserInfo } from './pageComponents/usersComponents/'

const UserProfile = () => {
	const { users } = useContext(SearchUserContext);
	const { id } = useParams();
	const [user, setUser] = useState([]);

	useEffect(() => { setUser(users.filter(user => user.id === parseInt(id)) )},[id]);
  const profil = user.map(item => <UserInfo key={item.id} item={item} /> )

  return (
    <div>
      {profil}
      <Link className="link-button link-btn-position" to="/users"><Button values="Back" bg="button-back" /></Link>
    </div>
  )
}

export default UserProfile;

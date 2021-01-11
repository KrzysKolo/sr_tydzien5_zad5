import React, { useContext } from 'react';
import { SearchUserContext } from './../../../contexts/SearchUserContext';
import { Link } from 'react-router-dom';

const UserListDetails = ({ user }) => {
	const { showProfil, setShowProfil } = useContext(SearchUserContext);


  return (
    <li className="user-list__item">
       <h3><Link className="link-userprofile" to={`/user/${user.id}` }>{user.name.first} {user.name.last} </Link></h3>
    </li>
  )
}

export default UserListDetails;

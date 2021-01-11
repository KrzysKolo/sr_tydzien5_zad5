import React from 'react';
import { Link } from 'react-router-dom';

const UserListDetails = ({ user }) => {
	console.log(user)
  return (
    <li className="user-list__item">
       <h3><Link className="link-userprofile" to={`/user/${user.id}`}  user={user}>{user.name.first} {user.name.last} </Link></h3>
    </li>
  )
}

export default UserListDetails;

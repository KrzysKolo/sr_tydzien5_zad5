import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UserListDetails = ({ user }) => {
	const { id } = useParams();
	console.log(id)
  return (
    <li className="user-list__item">
       <h3><Link className="link-userprofile" to={`/user/${user.id}`} >{user.name.first} {user.name.last} {user.id}</Link></h3>
    </li>
  )
}

export default UserListDetails;

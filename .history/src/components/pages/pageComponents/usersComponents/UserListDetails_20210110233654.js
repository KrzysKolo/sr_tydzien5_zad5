import React from 'react';
import { Link } from 'react-router-dom';

const UserListDetails = ({ user }) => {
	const { showProfil, setShowProfil } = useContext(SearchUserContext);
  return (
    <li className="user-list__item">
       <h3 onClick={()=> setShowProfil(true)}><Link className="link-userprofile" to={`/user/${user.id}` }>{user.name.first} {user.name.last} </Link></h3>
    </li>
  )
}

export default UserListDetails;

import React from 'react';
import { Link } from 'react-router-dom';

const UserListDetails = ({ user }) => {
    return (
        <li className="user-list__item">
            <h3><Link to={`/user/${user.id`}>{user.name.first} {user.name.last}</Link></h3>
        </li>
    )
}

export default UserListDetails;

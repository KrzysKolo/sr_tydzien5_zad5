import React from 'react';
import { Link } from 'react-router-dom';

const UserListDetails = ({ user }) => {
    return (
        <li className="user-list__item">
            <Link to={`/user/${user.id`}>{user.name.first} {user.name.last}</Link>
        </li>
    )
}

export default UserListDetails;

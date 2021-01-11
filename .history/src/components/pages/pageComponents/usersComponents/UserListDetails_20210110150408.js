import React, { Link } from 'react';

const UserListDetails = ({ user }) => {
    return (
        <li className="user-list__item">
            <h3>{user.name.first} {user.name.last}</h3>
        </li>
    )
}

export default UserListDetails;

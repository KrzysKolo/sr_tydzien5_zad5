import React, { Link } from 'react';

const UserListDetails = ({ user }) => {
    return (
        <li className="user-list__item">
            <h3><Link>{user.name.first} {user.name.last}</Link></h3>
        </li>
    )
}

export default UserListDetails;

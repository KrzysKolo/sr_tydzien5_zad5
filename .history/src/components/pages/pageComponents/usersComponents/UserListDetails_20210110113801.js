import React from 'react';

const UserListDetails = ({ user }) => {
    return (
        <li className="user-list__item">
            {user.name.first} {user.name.last}
        </li>
    )
}

export default UserListDetails;

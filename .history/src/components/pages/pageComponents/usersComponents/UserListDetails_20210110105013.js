import React from 'react';

const UserListDetails = ({ user }) => {
    return (
        <li>
            {user.name.first} {user.name.last}
        </li>
    )
}

export default UserListDetails;

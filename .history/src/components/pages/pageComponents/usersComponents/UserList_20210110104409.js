import React, { useContext } from 'react';
import { SearchUserContext } from './../../../contexts/';
import { UserListDetails } from './';
const UserList = () => {
    const { users, isLoading } = useContext(SearchUserContext);
    return (
        <div>

        </div>
    )
}

export default UserList;

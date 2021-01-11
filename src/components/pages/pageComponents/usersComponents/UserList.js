import React, { useContext } from 'react';
import { SearchUserContext } from './../../../contexts/SearchUserContext';
import UserListDetails from './UserListDetails';
import Loading from './Loading';

const UserList = () => {
  const { filteredUsers, isLoading } = useContext(SearchUserContext);
  const user = filteredUsers.map(user => {
    return <UserListDetails key={user.id} user={user} />
	})

  return isLoading ? <Loading /> : (
    <ul className="user-list">
      {user}
    </ul>
  )
}

export default UserList;

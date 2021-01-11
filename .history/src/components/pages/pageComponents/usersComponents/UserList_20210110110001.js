import React, { useContext } from 'react';
import SearchUserContext from './../../../contexts/SearchUserContext';
import { UserListDetails, Loading } from './../usersComponents/';

const UserList = () => {
  const { users, isLoading } = useContext(SearchUserContext);
  const user = users.map(user => {
    return <UserListDetails key={user.id} user={user} />
	})

  return isLoading ? <Loading /> : (
    <ul>
      {user}
    </ul>
  )
}

export default UserList;

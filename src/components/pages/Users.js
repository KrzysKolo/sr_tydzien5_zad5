import React, { useContext } from 'react';
import { SearchUserContext }  from './../contexts/SearchUserContext';
import { SearchUser, Error, UserList } from './pageComponents/usersComponents/';

const User = () => {
  const { isErr } = useContext(SearchUserContext);
  return (
    <div className="pages">
      <div className="page-users">
        <SearchUser />
        { isErr && <Error isErr={isErr} /> }
        <UserList />
      </div>
    </div>
  )
}

export default User;

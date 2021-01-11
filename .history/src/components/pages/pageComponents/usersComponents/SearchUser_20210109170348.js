import React from 'react';
import { Button, Input } from './../../../formComponents/'

const SearchUser = () => {
  return (
    <div className="page-users__searchUser">
      <Input placeholder="Enter user's first or last name..." />
			<Button value="Search" bg="button-search" />
      <Button value="Reset" bg="button-reset" />
    </div>
  )
}

export default SearchUser;

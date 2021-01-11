import React from 'react';
import { Button } from './../../../formComponents/'

const SearchUser = () => {
  return (
    <div className="page-users__searchUser">
			<Button value="Search" bg="button-search" />
      <Button value="Reset" bg="button-reset" />
    </div>
  )
}

export default SearchUser;

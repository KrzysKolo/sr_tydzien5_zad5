import React from 'react';
import { Button } from './../../../formComponents/'

const SearchUser = () => {
  return (
    <div className="page-users__searchUser">
      <Button value="Reset" bg="button-reset" />
			<Button value="Search" />
    </div>
  )
}

export default SearchUser;

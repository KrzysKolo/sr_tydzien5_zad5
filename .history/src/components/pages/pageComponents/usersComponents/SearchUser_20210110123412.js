import React, { useContext, useState } from 'react';
import { SearchUserContext } from './../../../contexts/SearchUserContext';
import { Button, Input } from './../../../formComponents/'

const SearchUser = () => {
  const { isErr, setIsErr, searchValue, setSearchValue } = useContext(SearchUserContext);
  const [value, setValue] = useState("");

	const handleChange = (e) => {
    setValue(e.target.value.toLowerCase());
    console.log(value)
	};

	const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
		if (value === "") {
      setIsErr("Enter the user's first or last name!")
      console.log(isErr);
		} else {
      setSearchValue(value);
      setIsErr('');
      console.log(`wysłano ${searchValue}`)
    };
	};

	const handleReset = () => {
		setValue('');
    setIsErr('');
    console.log("reset")
  };

  return (
    <form className="page-users__searchUser" onSubmit={handleSubmit}>
      <Input type="text" placeholder="Enter user's first or last name..." value={searchValue} onChange={handleChange} require />
			<Button values="Search" bg="button-search" onClick={handleSubmit} />
      <Button values="Reset" bg="button-reset" onClick={handleReset} />
    </form>
  )
}

export default SearchUser;

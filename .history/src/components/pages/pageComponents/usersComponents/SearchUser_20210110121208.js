import React, { useContext } from 'react';
import { SearchUserContext } from './../../../contexts/'
import { Button, Input } from './../../../formComponents/'

const SearchUser = () => {
  const { setIsErr, searchValue, setSearchValue } = useContext(SearchUserContext);
  const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value.toLowerCase());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value === "") {
			setIsErr("Enter the user's first or last name!")
		} else {
      setSearchValue(value);
      setIsErr('');
    };
	};

	const handleReset = () => {
		setSearchValue('');
		setIsErr('');
  };

  return (
    <form className="page-users__searchUser" onSubmit={handleSubmit}>
      <Input placeholder="Enter user's first or last name..." value={searchValue}  />
			<Button value="Search" bg="button-search" onClick={handleSubmit} />
      <Button value="Reset" bg="button-reset" onClick={handleReset} />
    </form>
  )
}

export default SearchUser;

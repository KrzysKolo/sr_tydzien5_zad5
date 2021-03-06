import React from 'react';
import { SearchUserContext } from './../../../contexts/'
import { Button, Input } from './../../../formComponents/'

const SearchUser = () => {
  const { setIsErr, searchValue, setSearchValue } = useContext(UserContext);
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
    <div className="page-users__searchUser">
      <Input placeholder="Enter user's first or last name..." />
			<Button value="Search" bg="button-search" />
      <Button value="Reset" bg="button-reset" />
    </div>
  )
}

export default SearchUser;

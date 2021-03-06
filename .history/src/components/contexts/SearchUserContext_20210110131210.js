import React, { createContext, useState, useEffect } from 'react';

export const SearchUserContext = createContext();

const SearchUserContextProvider = (props) => {

	const UserApi = '/users.json';
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] =useState([]);
	const [searchValue, setSearchValue] =useState('')
	const [isLoading, setIsLoading] = useState(true);
	const [isErr, setIsErr] = useState('');

	useEffect(() => {
		getUsers()
	}, []);

	const getUsers = () => {
		let timer = setTimeout(() => {
			fetch(UserApi)
			.then(res => {
				if(res.ok) {
					return res;
				}
				throw Error(res.status);
			})
			.then(res => res.json())
			.then(data => {
				setUsers(data.users);
				setIsLoading(false);
				clearTimeout(timer);
			})
			.catch(error => setIsErr(`The problem is with: ${error}`));

		}, 500);
	};

	useEffect(() => {
    console.log(searchValue);
		if (searchValue.trim() === "") {
		  setFilteredUsers(users);
		  return;
		}
		else {
		  if (searchValue.trim() !== "") {
			setFilteredUsers(
			  users.filter((user) => {
				const fullName = `${user.name.first} ${user.name.last}`;
				return fullName
			.toLowerCase()
			.split(" ")
			.join("")
			.includes(searchValue.toLowerCase().split(" ").join(""));
			}
			  )
			);
		  }
		}
	  }, [searchValue, users]);

  return (
    <SearchUserContext.Provider value={{filteredUsers, isErr, isLoading, searchValue, setIsErr, setIsLoading, setSearchValue}} >
    	{ props.children}
    </SearchUserContext.Provider>
  );
}

export default SearchUserContextProvider;
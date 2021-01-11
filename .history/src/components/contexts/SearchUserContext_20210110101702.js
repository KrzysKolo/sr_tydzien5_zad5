import React, { createContext, useState, useEffect } from 'react';

export const SearchUserContext = createContext();

const SearchUserContextProvider = (props) => {

	const UserApi = '/users.json';
	const [users, setUsers] = useState([]);
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

		}, 500)
	}

  return (
    <SerchUserContext.Provider value= {{users, isErr, isLoading, setIsErr, setIsLoading}} >
    	{ props.children}
    </SerchUserContext.Provider>
  );
}

export default SearchUserContextProvider;
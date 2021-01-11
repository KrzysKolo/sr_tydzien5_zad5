import React, { useContext, useState } from 'react';

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
    return (
        <SidebarContext.Provider value= {{users, filteredUsers, isLoading, setIsLoading, setIsErr, isErr, searchValue, setSearchValue}} >
			{ props.children }
		</SidebarContext.Provider>
    )
}

export default SidebarContextProvider;

import React, { useContext, useState } from 'react';

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
	const [status, setStatus] = useState('open');
  return (
    <SidebarContext.Provider value= {{ status, setStatus }} >
			{ props.children }
		</SidebarContext.Provider>
  )
}

export default SidebarContextProvider;

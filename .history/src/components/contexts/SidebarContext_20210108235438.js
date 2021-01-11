import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
  const [status, setStatus] = useState(true);

  return (
    <SidebarContext.Provider value= {{ status, setStatus }} >
			{ props.children }
		</SidebarContext.Provider>
  )
}

export default SidebarContextProvider;

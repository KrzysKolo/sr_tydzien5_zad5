import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
  const [status, setStatus] = useState('open');



  return (
    <SidebarContext.Provider value= {{ status, setStatus, handleToogle }} >
			{ props.children }
		</SidebarContext.Provider>
  )
}

export default SidebarContextProvider;

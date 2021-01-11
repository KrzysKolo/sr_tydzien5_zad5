import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
  const [statue, setStatus] = useState('open');

  const menuVariants = {
    open: {
        transform: "translateX(100%)",
    },
    closed: {
        transform: "translateX(35px)",
    },
}

  return (
    <SidebarContext.Provider value= {{ status, setStatus, menuVariants }} >
			{ props.children }
		</SidebarContext.Provider>
  )
}

export default SidebarContextProvider;

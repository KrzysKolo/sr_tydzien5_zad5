import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
  const [status, setStatus] = useState('open');

  const menuTransition = { type: "spring", duration: 1, stiffness: 33, delay: 0.1 }
  const menuVariants = {
    open: {
        transform: "translateX(100%)",
    },
    closed: {
        transform: "translateX(35px)",
    },
}

  return (
    <SidebarContext.Provider value= {{ status, setStatus, menuTransition, menuTransition }} >
			{ props.children }
		</SidebarContext.Provider>
  )
}

export default SidebarContextProvider;

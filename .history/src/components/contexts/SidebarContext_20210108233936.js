import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState('open');

  const menuVariants = {
    open: {
        transform: "translateX(100%)",
    },
    closed: {
        transform: "translateX(35px)",
    },
}

  return (
    <SidebarContext.Provider value= {{ isOpen, setIsOpen, menuVariants }} >
			{ props.children }
		</SidebarContext.Provider>
  )
}

export default SidebarContextProvider;

import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
  const [status, setStatus] = useState('open');
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <SidebarContext.Provider value= {{ status, setStatus, showSidebar, setShowSidebar }} >
			{ props.children }
		</SidebarContext.Provider>
  )
}

export default SidebarContextProvider;

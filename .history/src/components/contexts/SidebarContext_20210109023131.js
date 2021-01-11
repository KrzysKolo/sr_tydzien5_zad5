import React, { createContext, useState } from 'react';
import user from './../img/user.jpg';

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
  const [status, setStatus] = useState('close');
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <SidebarContext.Provider value= {{ status, setStatus, showSidebar, setShowSidebar }} >
			{ props.children }
		</SidebarContext.Provider>
  )
}

export default SidebarContextProvider;

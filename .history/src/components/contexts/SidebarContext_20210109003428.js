import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
  const [status, setStatus] = useState('open');
  const [variants, setVariants] = useState('show');

  return (
    <SidebarContext.Provider value= {{ status, setStatus, variants, setVariants }} >
			{ props.children }
		</SidebarContext.Provider>
  )
}

export default SidebarContextProvider;

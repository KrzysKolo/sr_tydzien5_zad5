import React, { createContext, useState, useEffect } from 'react';

export const SerchUserContext = createContext();

const SerchUserContextProvider = (props) => {
    return (
        <SerchUserContext.Provider value= {{}} >
            { props.children}
        </SerchUserContext.Provider>
     );
}

export default SerchUserContextProvider;
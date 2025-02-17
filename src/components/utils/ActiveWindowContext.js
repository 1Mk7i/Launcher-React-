import React, { createContext, useState, useContext } from 'react';

const ActiveWindowContext = createContext();

export const ActiveWindowProvider = ({ children }) => {
  const [activeWindow, setActiveWindow] = useState(null);

  return (
    <ActiveWindowContext.Provider value={{ activeWindow, setActiveWindow }}>
      {children}
    </ActiveWindowContext.Provider>
  );
};

export const useActiveWindow = () => useContext(ActiveWindowContext);
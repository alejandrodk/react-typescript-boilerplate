import React, { useState } from 'react';
import {Theme, DarkTheme} from '@styles';
import { IAppContext } from '@interfaces';

export const AppContext = React.createContext({} as IAppContext);

export const ContextProvider = ({ children }: any) => {
  const [testState, setTestState] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const context = {
    testState,
    setTestState,
    setDarkMode,
    theme: (darkMode ? DarkTheme : Theme)
  };
  
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

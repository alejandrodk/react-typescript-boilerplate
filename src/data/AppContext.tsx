import React, { useState } from 'react';
import { IAppContext } from '@interfaces';

export const AppContext = React.createContext({} as IAppContext);

export const ContextProvider = ({ children }: any) => {
  const [testState, setTestState] = useState(null);

  const context = {
    testState,
    setTestState
  };
  
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

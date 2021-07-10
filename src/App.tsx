import React from 'react';
import { ContextProvider } from '@data';
import { MainRouter } from '@routers';

function App() {
  return (
    <ContextProvider>
      <MainRouter />
    </ContextProvider>
  );
}

export default App;

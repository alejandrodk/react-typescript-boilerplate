import React from 'react';

import { App, AppHeader, AppLogo, AppLink } from './Welcome.styles';
import logo from './../../assets/images/logos/logo.svg';

const Welcome: any = () => (
  <App>
    <AppHeader>
      <AppLogo src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <AppLink
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </AppLink>
    </AppHeader>
  </App>
);

export default Welcome;

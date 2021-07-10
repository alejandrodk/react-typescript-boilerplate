import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Welcome } from '@components';

function MainRouter() {
  return (
    <Router>
      <Route path="/" render={Welcome} />
    </Router>
  );
}

export default MainRouter;

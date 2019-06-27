import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContextProvider } from '../context';
import Content from '../content';

const App = _ => (
  <Router>
    <GlobalContextProvider>
      <Content />
    </GlobalContextProvider>
  </Router>
);

export default App;

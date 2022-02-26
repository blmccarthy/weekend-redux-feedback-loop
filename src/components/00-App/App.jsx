import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Header from '../00a-Header/Header';
import Feeling from '../01-Feeling/Feeling';

function App() {

  return (
    <Router>
      <Route path='/' exact>
        <Header />
        <Feeling />
      </Route>
    </Router>
  );
}

export default App;

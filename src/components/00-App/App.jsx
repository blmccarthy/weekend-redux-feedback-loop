import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Header from '../00a-Header/Header';
import Feeling from '../01-Feeling/Feeling';
import Understanding from '../02-Understanding/Understanding';
import Support from '../03-Support/Support';
import Comments from '../04-Comments/Comments';
import Review from '../05-Review/Review';
import ThankYou from '../06-ThankYou/ThankYou';

function App() {

  return (
    <Router>
      <Route path='/' exact>
        <Header />
        <Feeling />
      </Route>
      <Route path='/Understanding' exact>
        <Header />
        <Understanding />
      </Route>
      <Route path='/Support' exact>
        <Header />
        <Support />
      </Route>
      <Route path='/Comments' exact>
        <Header />
        <Comments />
      </Route>
      <Route path='/Review' exact>
        <Header />
        <Review />
      </Route>
      <Route path='/ThankYou' exact>
        <Header />
        <ThankYou />
      </Route>
    </Router>
  );
}

export default App;

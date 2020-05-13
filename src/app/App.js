import React from 'react';
import './App.css';
import Tabs from '../components/tabs/Tabs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import Search from '../pages/search/Search';


function App() {
  return (
    <main className="main">
      <Router>
        <Switch>
          <Route path="/search"><Search /></Route>
          <Route path="/profile"><Profile /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
      <Tabs />
    </main>
  );
}

export default App;

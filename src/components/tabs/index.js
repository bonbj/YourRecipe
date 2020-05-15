import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style.css';

import Home from '../../pages/home/index';
import Search from '../../pages/search/index';
import Profile from '../../pages/profile/index';

import { AiOutlineHome } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';




const Tabs = () => {
    return(
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">
                  <AiOutlineHome />Home</Link>
            </li>
            <li>
              <Link to="/Search">
                  <FiSearch />Search</Link>
            </li>
            <li>
              <Link to="/Profile">
                  <BsPerson />Profile</Link>
            </li>
          </ul>
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Search">
              <Search />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default Tabs;
import React, { Component } from 'react';
import './Tabs.css';

import { Link, BrowserRouter as Router} from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';



class Tabs extends Component {
    render() {
    return(
        <>
        <Router>
         <footer className="container tabs" >
             <section className="row">
                 <Link to="/search" className="col-4 tabs-btn">
                     <FiSearch className="icon" />
                     <p>Search</p>
                 </Link>

                 <Link to="/" className="col-4 tabs-btn">
                     <AiOutlineHome className="icon" />
                     <p>Home</p>
                 </Link>

                 <Link to="/profile" className="col-4 tabs-btn">
                     <BsPerson className="icon" />
                     <p>Profile</p>
                 </Link>
             </section>
             </footer>
             </Router>
        </>
    );
}
}

export default Tabs;
import React, { Component } from "react";
import "./Tabs.css";

import { Link, BrowserRouter as Router } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.setButton = this.setButton.bind(this);
    }

  state = {
    buttomSearch: false,
    buttomHome: true,
    buttomProfile: false,
  };

  setButton() {
    switch (window.location.pathname) {
        case "/":
          this.setState({
            buttomSearch: false,
            buttomHome: true,
            buttomProfile: false,
          });
          break;
        case "/search":
          this.setState({
            buttomSearch: true,
            buttomHome: false,
            buttomProfile: false,
          });
          break;
        case "/profile":
          this.setState({
            buttomSearch: false,
            buttomHome: false,
            buttomProfile: true,
          });
          break;
        default:
          break;
      }
  }

  componentDidMount() {
        this.setButton();
  }

  render() {
    return (
      <div>
        <Router>
          <footer className="container tabs">
            <section className="row">
              <div className="col-4">
                <Link to="/search" className={`tabs-btn active-` + this.state.buttomSearch}>
                  <FiSearch className="icon" />
                  <p>Search</p>
                </Link>
              </div>

              <div className="col-4">
                <Link to="/" className={`tabs-btn active-` + this.state.buttomHome}>
                  <AiOutlineHome className="icon" />
                  <p>Home</p>
                </Link>
              </div>

              <div className="col-4">
                <Link to="/profile" className={`tabs-btn active-` + this.state.buttomProfile}>
                  <BsPerson className="icon" />
                  <p>Profile</p>
                </Link>
              </div>
            </section>
          </footer>
        </Router>
      </div>
    );
  }
}

export default Tabs;

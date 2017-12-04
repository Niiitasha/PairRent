import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Discover from "./Discover";
import Home from "./Home";
import SearchForm from "./SearchForm";
import ProfilePage from "./ProfilePage";

class Nav extends Component {
    render() {
        return (
            <Router>
                <nav className="mainNav">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <a className="menuItems homeMenuItem" href="/Home"><li>Home</li></a>
                            <a className="menuItems" href="/Discover"><li>Discover</li></a>
                            <a className="menuItems" href="/SearchForm"><li>Search</li></a>
                            <a className="menuItems" href="/ProfilePage"><li>Profile</li></a>
                        </ul>
                    </div>
                    <div className="paths">
                        <Route path="/Home" component={Home} />
                        <Route path="/Discover" component={Discover} />
                        <Route path="/SearchForm" component={SearchForm} />
                        <Route path="/ProfilePage" component={ProfilePage} />
                    </div>
                </nav>
            </Router>
        );
    }
}

export default Nav;

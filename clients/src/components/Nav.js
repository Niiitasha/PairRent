import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Discover from "./Discover";
import SearchForm from "./SearchForm";

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
                            <a href="/Discover"><li>Discover</li></a>
                            <a href="/SearchForm"><li>Search</li></a>
                        </ul>
                    </div>
                    <div className="paths">
                        <Route path="/Discover" component={Discover} />
                        <Route path="/SearchForm" component={SearchForm} />
                    </div>
                </nav>
            </Router>
        );
    }
}

export default Nav;

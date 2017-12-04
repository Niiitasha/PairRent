import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Discover from "./Discover";
import Home from "./Home";
import SearchForm from "./SearchForm";
import ViewProfile from "./ViewProfile";

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
                            <a href="/"><li>Home</li></a>
                            <a href="/Discover"><li>Discover</li></a>
                            <a href="/SearchForm"><li>Search</li></a>
                            <a href="/ViewProfile"><li>Profile</li></a>
                        </ul>
                    </div>
                    <div className="paths">
                        <Route path="/Home" component={Home} />
                        <Route path="/Discover" component={Discover} />
                        <Route path="/SearchForm" component={SearchForm} />
                        <Route path="/ViewProfile" component={ViewProfile} />
                    </div>
                </nav>
            </Router>
        );
    }
}

export default Nav;

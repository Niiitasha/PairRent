import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Discover from "./Discover";
import SearchForm from "./SearchForm";

class Nav extends Component {
    render() {
        return (
          <Router>
<div className="main">
  <Link to="/Discover">Discover</Link>{' '}
  <Link to="/SearchForm">Search</Link>
  <Route exact path="/Discover" render={Discover}/>
  <Route path="/Discover" component={Discover}/>
  <Route path="/SearchForm" component={SearchForm}/>

</div>
</Router>
        );
    }
}

export default Nav;

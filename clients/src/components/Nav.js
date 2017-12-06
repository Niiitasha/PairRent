import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
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
            </ul>
          </div>
          <div className="paths">
            <Route path="/Home" render={() => (
              <div className="bodyComponents">
                <Home />
              </div>
            )} />
            <Route path="/Discover" render={() => (
              <div>
                <div className="bodyComponents">
                  <Discover />
                </div>
              </div>
            )} />
            <Route path="/SearchForm" render={() => (
              <div className="bodyComponents">
                <SearchForm />
              </div>
            )} />



            <Route path="/ProfilePage/:id" render={({ match }) => (
              <ProfilePage
                id={match.params.id}
              />
            )} />


          </div>
        </nav>
      </Router>
    );
  }
}

export default Nav;

// needed for styling
// <Route path="/ProfilePage" render={() => (
//   <div className="bodyComponents">
//     <ProfilePage />
//   </div>
// )} />

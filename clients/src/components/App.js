import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <Nav />
    );
  }
}

const mapActionsToProps = {

}

export default connect(null, mapActionsToProps)(App);

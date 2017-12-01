import React, { Component } from 'react';
import Nav from "./Nav";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">

      <div>
      <Nav />
    </div>
      <div>
      <Home />
    </div>
  </div>
    );
  }
}

export default App;

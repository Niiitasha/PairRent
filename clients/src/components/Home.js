import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    return (
      <div className="homePage">
      <h1 className="headerMain">PAIRRENT</h1>
        <div className="imgColumn"><img src="https://pixabay.com/p-1889405/?no_redirect"></img><p>This is a fun app to use!</p></div>
        <div className="imgColumn2"><p>I found a roommate and a best friend on this app!</p><img src="https://pixabay.com/p-2326419/?no_redirect"></img></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.data,
  }
}

export default connect(mapStateToProps)(Home);

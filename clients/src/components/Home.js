import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    return (
      <div className="homePage">
      <h2 className="headerMain">PAIRRENT</h2>
        <div className="imgContainer"><img className="homeImg" src="images/david.jpg"></img><p className="homeImg">This is such a fun app to use!</p>
        <p className="homeImg">I found a roommate who is now my best friend!</p><img className="homeImg" src="images/tamara.jpg"></img></div>
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

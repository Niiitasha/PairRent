import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
        return (
          <div className="homePage">
          </div>
      );
    }
}

function mapStateToProps(state){
  return {
      users: state.data,
    }
}

export default connect(mapStateToProps)(Home);

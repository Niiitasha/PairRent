import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from './Carousel';

class Home extends Component {

  render() {
    return (
      <div className="homePage">
        <div className="carry">
    </div>
      <div className="testimonals">
        <div className="testominalOne">
            <img className="homeImg" src="images/tony.jpeg"></img>
            <div className="testimonialText">This is such a fun app to use! I have not had luck finding a
            roommate through other means. PairRent gave me the opportunity to save money on my rent so I can
            put all additional financial resources towards my child. He now has a built in set of playmates,
            which is another added bonus! Highly recommended.
          </div>
        </div>

            <div className="testominalTwo">
            <img className="homeImg" src="images/tamara.jpg"></img>
            <div className="testimonialText" >As a single mother, I was concerned about
            safety and reliability when looking for someone to share the expenses of renting a home.
            PairRent took care of all of my concerns by providing background checks and verifying employment
            for all of their users. The app is easy and straightforward to use and I found a roommate who is
            now my best friend!</div>

          </div>
        </div>
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

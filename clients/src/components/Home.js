import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
      <div className="homePage">
        <div className="imgContainer">
          <h2 className="headerMain">PairRent</h2>
          <img className="homeImg" src="images/tony.jpeg"></img>
          <div className="homeImg testimonial">This is such a fun app to use! I have not had luck finding a
            roommate through other means. PairRent gave me the opportunity to save money on my rent so I can
            put all additional financial resources towards my child. He now has a built in set of playmates,
            which is another added bonus! Highly recommended.</div>
          <div className="homeImg testimony" >As a single mother, I was concerned about
            safety and reliability when looking for someone to share the expenses of renting a home.
            PairRent took care of all of my concerns by providing background checks and verifying employment
            for all of their users. The app is easy and straightforward to use and I found a roommate who is
            now my best friend!</div>
          <img className="homeImg" src="images/tamara.jpg"></img></div>
      </div>
    );
  }
}

export default Home;

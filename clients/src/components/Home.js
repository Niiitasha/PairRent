import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "./Card";

class Home extends Component {

  render() {
        return (
          <div className="homePage">
            <h1>PairRent</h1>
            
           <div className="carousel">...</div>

            <div className="userReviews">

                <div className="userImage"><img src="https://static.pexels.com/photos/213117/pexels-photo-213117.jpeg"></img></div>
                <div className="testimony">This is a good app</div>


                <div className="testimonials">
                <div className="userImage"><img src="https://static.pexels.com/photos/213117/pexels-photo-213117.jpeg"></img></div>
                <div className="testimony">This is a good app</div>
            </div>
          </div>
          </div>
      );
    }
}

function mapStateToProps(state){
  return {
      users: state.data,
      isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(Home);

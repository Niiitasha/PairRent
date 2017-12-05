import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "./Card";

class ProfileList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myIndex: 0,
    }
  }
  render() {
    const profiles = this.props.data.map((profile) => (
        <div className="discoverCard" key={profile.id}> <Card profile={profile} /> </div>
      ));
    return (
      <div className="profiles">
        <button type="button" className="PrevButton" onClick={this.prevElement.bind(this)}>&lt;</button>
        <div className="showProfiles">
          {profiles[this.state.myIndex]}
        </div>
        <button type="button" className="NextButton" disabled={this.props.disabled}
          onClick={this.nextElement.bind(this)}>&gt;</button>
      </div>
    );
  }
  nextElement() {
    if (this.state.myIndex === 49) {
      disabled: this.state.currentCardIndex >= 49
    } else {
      const newIndex = {
        myIndex: this.state.myIndex++
      }
      this.setState({
        newIndex
      });
    }
  }
  prevElement() {
    if (this.state.myIndex === 0) {
      disabled: this.state.currentCardIndex <= 0
    } else {
      const newIndex = {
        myIndex: this.state.myIndex--
      }
      this.setState({
        newIndex
      });
    }
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(ProfileList);

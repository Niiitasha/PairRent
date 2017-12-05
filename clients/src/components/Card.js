import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {
    render() {
        return (
          <div className="card">
                <img alt="Profile" src={this.props.profile.profilepic}></img>
                <p className="name">{this.props.profile.name}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const card = state.data[state.currentCardIndex];
    return {
        card
    };
}

export default connect(mapStateToProps)(Card);

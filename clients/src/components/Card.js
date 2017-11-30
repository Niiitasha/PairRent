import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (

            <div className="card">
                <img alt="Profile" src={this.props.profile.profilepic}></img>
                <p className="bio">{this.props.profile.bio}</p>
            </div>
          
        );
    }
}

export default Card;

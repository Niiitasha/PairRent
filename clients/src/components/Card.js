import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                &lt;
                <img alt="Profile" href={this.props.profile.profilepic}></img>
                <p>{this.props.profile.bio}</p>
                &gt;
            </div>
        );
    }
}

export default Card;

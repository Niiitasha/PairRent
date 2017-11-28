import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                &lt;
                <img alt="Profile" href={this.props.profilepic}></img>
                <p>{this.props.bio}</p>
                &gt;
            </div>
        );
    }
}

export default Card;

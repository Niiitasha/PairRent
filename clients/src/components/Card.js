import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                &lt;
                <img alt="Profile">Image</img>
                <p>Bio</p>
                <ul>Unordered List
                    <li>List Item</li>
                </ul>
                &gt;
            </div>
        );
    }
}

export default Card;

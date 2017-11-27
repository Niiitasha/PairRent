import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "./Card";

class CardList extends Component {
    render() {
        const profileMatches = this.props.matches.map((match, index) => (
            <Card key={index} match={match} />
        ));
        return (
            { profileMatches }

        );
    }
}

function mapStateToProps(state) {
    return {
        matches: state.matches
    }

}

export default connect(mapStateToProps)(CardList);
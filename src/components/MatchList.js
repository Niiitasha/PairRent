import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "./Card";

class MatchList extends Component {
    render() {
        const profileMatches = this.props.matches.map((match, id) => (
            <Card key={id} match={match} />
        ));
        return (
            <div className="profileMatches">
                {profileMatches}
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        matches: state.matches
    }

}

export default connect(mapStateToProps)(MatchList);

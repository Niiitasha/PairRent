import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "./Card";

class ProfileList extends Component {
    render() {
        const profiles = this.props.profiles.map((profile, id) => (
            <Card key={id} profile={profile} />
        ));
        return (
            <div className="profiles">
                {profiles}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        profiles: state.profiles
    }
}

export default connect(mapStateToProps)(ProfileList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "./Card";

// profileView was profile
// profileViews was profiles
// showProfileViews was showprofiles

class ViewProfileInfo extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         myIndex: 0,
    //     }
    // }
    render() {
        // const profileView = this.props.data.map((profileView) => (
        //     <Card key={profileView.id} profileView={profileView} />
        // ));
        return (
            <div className="profileViews">

            </div>

        );
    }
}

// <div className="showProfileView">
// {profileViews[this.state.myIndex]}
// </div>

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(ViewProfileInfo);

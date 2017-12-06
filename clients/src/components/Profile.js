import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="profileCard">
                <div className="profileCardBackgroundDiv">
                    <div className="profileImageAndData">
                        <div className="profilePageImages">
                            <img alt="ProfileImage" src={this.props.profile.profilepic}></img>
                        </div>
                        <div className="profilePageData">
                            <p className="profileName"><strong>Name: </strong>{this.props.profile.name}</p>
                            <p className="profileKids"><strong>Number of Kids: </strong>{this.props.profile.kids}</p>
                            <p><strong>Smoker: </strong>No</p>
                            <p><strong>Needs: </strong>Daughter has nut allergies</p>
                            <p><strong>Occupation: </strong>Museum Curator</p>
                        </div>
                    </div>
                    <div className="profileBioOnly">
                        <div>
                            <p className="profileBio"><strong>Biography: </strong>{this.props.profile.bio}</p>
                        </div>
                        <div className="profileMessage"><img alt="Message" src="/images/messageIcon.png"></img> Start PairRenting!</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;

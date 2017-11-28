import React, { Component } from 'react';
import { connect } from 'react-redux';
import MatchList from './MatchList';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smoking: true,
            needs: true,
            //male = true, female = false
            gender: true,
            kids: 0
        };
    }
    render() {
        return (
            <div className="searchForm">
                <form className="search" >
                    <h2>What are you looking for in a Roommate?</h2>
                    <label>Smoking?<input type="checkbox" onChange={this.smoking.handleSmokingChange.bind(this)} /></label>
                    <label>Special Needs?<input type="checkbox" onChange={this.needs.handleNeedsChange.bind(this)} /></label>
                    <label>Female?<input name="gender" value="female" type="radio" onChange={this.gender.handleGenderChange.bind(this)} /></label>
                    <label>Male?<input name="gender" value="male" type="radio" onChange={this.gender.handleGenderChange.bind(this)} /></label>
                    <label>No Preference?<input name="gender" value="none" type="radio" onChange={this.gender.handleGenderChange.bind(this)} /></label>
                    <label>Number of Kids? <input type="number" min="1" max="10" onChange={this.kids.handleKidsChange.bind(this)} /></label>
                </form>
                <div>
                    <MatchList />
                </div>
            </div>
        );
    }

    handleSmokingChange(event) {
        this.setState({
            smoking: event.target.value
        });
    }

    handleNeedsChange(event) {
        this.setState({
            needs: event.target.value
        });
    }

    handleGenderChange(event) {
        this.setState({
            gender: event.target.value
        });
    }

    handleKidsChange(event) {
        this.setState({
            kids: event.target.value
        });
    }
}

function mapStateToProps(state) {
    return {
        profiles: state.profiles
    }
}

export default connect(mapStateToProps, null)(SearchForm);
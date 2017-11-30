import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { makeMatches } from '../actions';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smoker: null,
            needs: null,
            female: null,
            gender: null,
            male: null,
            noPreference: null,
            kids: null,

        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render() {
        const madeMatches = this.props.matches.map(match => (
            <Card profile={match} key={match.id} />
        ));
        return (
            <div className="searchForm">
                <div className="matchNumberDiv">
                    <form className="search" >
                        <h2>What are you looking for?</h2>
                        <div className="smoker">
                            <label>Smoking OK:<input title="smoker" name="smoker" type="radio" value="smoker" onChange={this.handleInputChange} /></label>
                            <label>No Smoking:<input title="noSmoker" name="smoker" type="radio" value="noSmoker" onChange={this.handleInputChange} /></label>
                        </div>
                        <div className="needs">
                            <label>Special Needs OK:<input title="needs" name="needs" type="radio" value="needs" onChange={this.handleInputChange} /></label>
                            <label>No Special Needs:<input title="noNeeds" name="needs" type="radio" value="noNeeds" onChange={this.handleInputChange} /></label>
                        </div>
                        <div className="noPrefs">
                            <label>Female?<input title="female" name="gender" value="female" type="radio" onChange={this.handleInputChange} /></label>
                            <label>Male?<input title="male" name="gender" value="male" type="radio" onChange={this.handleInputChange} /></label>
                            <label>No Preference?<input title="noPreference" name="gender" value="none" type="radio" onChange={this.handleInputChange} /></label>
                        </div>
                        <div className="kids">
                            <label>Number of Kids? <input title="kids" type="number" min="1" max="10" onChange={this.handleInputChange} /></label>
                        </div>
                    </form>
                    <div className="currentMatches">
                    </div>
                    <p>Current Matches:{this.props.matchCount} </p>
                </div>
                <div className="cardHolder">
                    {madeMatches}
                </div>
            </div>
        );
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.title;

        if (name === "female") {
            this.state.gender = true;
        } else if (name === "male") {
            this.state.gender = false;
        } else {
            this.state.gender = null;
        }

        if (name === "needs") {
            this.state.needs = true;
        } else if (name === "noNeeds") {
            this.state.needs = false;
        }

        if (name === "smoker") {
            this.state.smoker = true;
        } else if (name === "noSmoker") {
            this.state.smoker = false;
        }

        if (name === "kids") {
            this.state.kids = parseInt(value);
        }

        const wants = {
            smoker: this.state.smoker,
            needs: this.state.needs,
            gender: this.state.gender,
            kids: this.state.kids,
            matchedProperties: []
        }

        this.setState({
            [name]: value
        }, () => {
            this.props.makeMatches(wants)
        });
    }
}

function mapStateToProps(state) {
    return {
        matches: state.matches,
        matchCount: state.matchCount
    }
}

const mapActionsToProps = {
    makeMatches
}

export default connect(mapStateToProps, mapActionsToProps)(SearchForm);

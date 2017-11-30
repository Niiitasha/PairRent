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
            kids: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render() {
        const madeMatches = this.props.matches.map(match => (
            <Card profile={match} key={match.id} />
        ));
        return (
            <div className="searchForm">
                <form className="search" >
                    <h2>What are you looking for in a Roommate?</h2>
                    <label>Smoker?<input type="checkbox" title="smoker" onChange={this.handleInputChange} /></label>
                    <label>Special Needs?<input title="needs" type="checkbox" onChange={this.handleInputChange} /></label>
                    <label>Female?<input title="female" name="gender" value="female" type="radio" onChange={this.handleInputChange} /></label>
                    <label>Male?<input title="male" name="gender" value="male" type="radio" onChange={this.handleInputChange} /></label>
                    <label>No Preference?<input title="noPreference" name="gender" value="none" type="radio" onChange={this.handleInputChange} /></label>
                    <label>Number of Kids? <input title="kids" type="number" min="1" max="10" onChange={this.handleInputChange} /></label>
                </form>
                <div className="cardHolder">
                    {madeMatches}
                </div>
            </div>
        );
    }

    // <label>Current Matches: <input type="disabled" value={this.state.matches} onChange={this.handleInputChange.bind(this)} /></label>

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
            this.state.needs = value;
        }

        if (name === "kids") {
            this.state.kids = parseInt(value);
        }

        if (name === "smoker") {
            this.state.smoker = value;
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
        matches: state.matches
    }
}

const mapActionsToProps = {
    makeMatches
}

export default connect(mapStateToProps, mapActionsToProps)(SearchForm);

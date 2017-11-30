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
                  <label>Smoking is fine:<input className="smoker" title="smoker" name="smoker" type="radio" value="smoker" onChange={this.handleInputChange} /></label>
                  <label>Smoking is unacceptable:<input className="noSmoker" title="noSmoker" name="smoker" type="radio" value="noSmoker" onChange={this.handleInputChange} /></label>
                  <label>Special Needs are fine:<input className="needs" title="needs" name="needs" type="radio" value="needs" onChange={this.handleInputChange} /></label>
                  <label>Special Needs are unacceptable:<input className="noNeeds" title="noNeeds" name="needs" type="radio" value="noNeeds" onChange={this.handleInputChange} /></label>
                  <label>Female?<input className="female" title="female" name="gender" value="female" type="radio" onChange={this.handleInputChange} /></label>
                  <label>Male?<input className="male" title="male" name="gender" value="male" type="radio" onChange={this.handleInputChange} /></label>
                  <label>No Preference?<input className="noPref" title="noPreference" name="gender" value="none" type="radio" onChange={this.handleInputChange} /></label>
                  <label>Number of Kids? <input className="kids" title="kids" type="number" min="1" max="10" onChange={this.handleInputChange} /></label>
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
        matches: state.matches
    }
}

const mapActionsToProps = {
    makeMatches
}

export default connect(mapStateToProps, mapActionsToProps)(SearchForm);

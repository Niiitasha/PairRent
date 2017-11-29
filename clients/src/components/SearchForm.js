import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { makeMatches } from '../actions';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smoking: true,
            needs: true,
            female: true,
            male: false,
            noPreference: false,
            kids: 1
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render() {
      const madeMatches = this.props.matches.map(match => (
        <Card profile={match} key={match.id}/>
      ));
        return (
            <div className="searchForm">
                <form className="search" >
                    <h2>What are you looking for in a Roommate?</h2>
<<<<<<< HEAD
                    <label>Smoking?<input title="smoking" type="checkbox"  onChange={this.handleInputChange} /></label>
                    <label>Special Needs?<input title="needs" type="checkbox"  onChange={this.handleInputChange} /></label>
                    <label>Female?<input title="female" name="gender" value="female"  type="radio" onChange={this.handleInputChange} /></label>
                    <label>Male?<input title="male" name="gender" value="male" type="radio"  onChange={this.handleInputChange} /></label>
                    <label>No Preference?<input title="noPreference" name="gender" value="none" type="radio"  onChange={this.handleInputChange} /></label>
                    <label>Number of Kids? <input title="kids" type="number" min="1" max="10" checked={this.state.kids} onChange={this.handleInputChange} /></label>
=======
                    <label>Smoking?<input type="checkbox" onChange={this.handleInputChange} /></label>
                    <label>Special Needs?<input type="checkbox" onChange={this.handleInputChange} /></label>
                    <label>Female?<input gender="female" name="gender" value="female" type="radio" onChange={this.handleInputChange} /></label>
                    <label>Male?<input gender="male" name="gender" value="male" type="radio" onChange={this.handleInputChange} /></label>
                    <label>No Preference?<input gender="noPreference" name="gender" value="none" type="radio" onChange={this.handleInputChange} /></label>
                    <label>Number of Kids? <input type="number" min="1" max="10" onChange={this.handleInputChange} /></label>
>>>>>>> edc8e43cc8c2e1ada35d5a26ca590ce110b83af2
                </form>
                <div>
                  {madeMatches}
                </div>
            </div>

        );
    }

    handleInputChange(event) {
        const target = event.target;
        // 'number'
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.title;

        this.setState({
            [name]: value
        });

        const wants = {
            smoking: this.state.smoking,
            needs: this.state.needs,
            genderFemale: this.state.genderFemale,
            genderMale: this.state.genderMale,
            noPreference: this.state.noPreference,
            kids: this.state.kids
        }
        this.props.makeMatches(wants);
    }
}

function mapStateToProps(state) {
    return {
        matches:state.matches
    }
}

const mapActionsToProps = {
    makeMatches
}

export default connect(mapStateToProps, mapActionsToProps)(SearchForm);

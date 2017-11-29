import React, { Component } from 'react';
import { connect } from 'react-redux';
import {makeMatches} from '../actions';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smoking: true,
            needs: true,
            genderFemale: true,
            genderMale:false,
            noPreference:false,
            kids: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render() {
        return (
            <div className="searchForm">
                <form className="search" >
                    <h2>What are you looking for in a Roommate?</h2>
                    <label>Smoking?<input type="checkbox" checked={this.state.smoking} onChange={this.handleInputChange} /></label>
                    <label>Special Needs?<input type="checkbox" checked={this.state.needs} onChange={this.handleInputChange} /></label>
                    <label>Female?<input name="genderFemale" value="female" checked={this.state.genderFemale} type="radio" onChange={this.handleInputChange} /></label>
                    <label>Male?<input name="genderMale" value="male" type="radio" checked={this.state.genderMale} onChange={this.handleInputChange} /></label>
                    <label>No Preference?<input name="noPreference" value="none" type="radio" checked={this.state.noPreference} onChange={this.handleInputChange} /></label>
                    <label>Number of Kids? <input type="number" min="1" max="10" checked={this.state.kids} onChange={this.handleInputChange} /></label>
                </form>
                <div>
                </div>
            </div>
        );
    }

    handleInputChange(event){

        const target = event.target;
        const value = target.type === 'checkbox' ? 'number' target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });

        const wants = {
          smoking: this.state.smoking,
          needs: this.state.needs,
          genderFemale: this.state.genderFemale,
          genderMale:this.state.genderMale,
          noPreference:this.state.noPreference,
          kids: this.state.kids
        }
        this.props.makeMatches(wants);


      }
}

function mapStateToProps(state) {
    return {
        profiles: state.profiles
    }
}

const mapActionsToProps = {
    makeMatches
}





export default connect(mapStateToProps, mapActionsToProps)(SearchForm);

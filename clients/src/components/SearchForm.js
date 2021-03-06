import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { makeMatches } from '../actions';
import { Link } from 'react-router-dom';

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
            active: true,
            id: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render() {
      const madeMatches = this.props.matches.map(match => (
            <div className="searchCard" key={match.user.id}> <Link to={"/profilepage/" + match.user.id}><Card profile={match.user} value={this.state.name} /></Link> </div>
        ));
        return (
            <div className="search">
                <form className="searchForm">
                    <h2>What are you looking for in a Roommate?</h2>
                    <div className="smoker">
                        <label>Is it okay if your future roommate smokes?</label>
                        <br />
                        <br />
                        <label className="choices">Yes&nbsp;<input title="smoker" name="smoker" type="radio" value="smoker" onChange={this.handleInputChange} />    </label>
                        <label className="choices">&nbsp;&nbsp;&nbsp;No&nbsp;<input title="noSmoker" name="smoker" type="radio" value="noSmoker" onChange={this.handleInputChange} />    </label>
                    </div>
                    <br />
                    <div className="needs">
                        <label>Are you comfortable living with a roommate whose child has special needs?</label>
                        <br />
                        <br />
                        <label className="choices">Yes&nbsp;<input title="needs" name="needs" type="radio" value="needs" onChange={this.handleInputChange} />    </label>
                        <label className="choices">&nbsp;&nbsp;&nbsp;No&nbsp;<input title="noNeeds" name="needs" type="radio" value="noNeeds" onChange={this.handleInputChange} />    </label>
                    </div>
                    <br />
                    <div className="noPrefs">
                        <label>Do you have a gender preference?</label>
                        <br />
                        <br />
                        <div className="genders">
                            <label className="choices">&nbsp;&nbsp;Female&nbsp;<input title="female" name="gender" value="female" type="radio" onChange={this.handleInputChange} /></label>
                            <br />
                            <label className="choices" >&nbsp;&nbsp;Male&nbsp;<input title="male" name="gender" value="male" type="radio" onChange={this.handleInputChange} /></label>
                            <br />
                            <label className="choices">&nbsp;&nbsp;No Preference&nbsp;<input title="noPreference" name="gender" value="none" type="radio" onChange={this.handleInputChange} /></label>
                        </div>
                    </div>
                    <br />
                    <div className="kids">
                        <label>How many kids are you comfortable with your roommate having?</label>
                        <br />
                        <br />
                        <input title="kids" type="number" min="1" max="10" onChange={this.handleInputChange} />
                    </div>
                </form>
                <div className={'currentMatches ' + (this.state.active ? 'minimized' : 'maximized')}>

                    <div className="matchBar">
                        <button className='arrow' onClick={this.handleClick.bind(this)}>{this.state.active ? <span>&#8679;</span> : <span>&#8681;</span>}</button>
                        <br></br>
                        <label>Current Matches: {this.props.matchCount}</label>
                    </div>
                    <div className="matchCards">
                        {madeMatches}
                    </div>
                </div>
            </div>
        );
    }

    handleClick() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
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

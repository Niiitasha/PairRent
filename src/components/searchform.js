import React, { Component } from 'react';
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
            <div className ="searchForm">
                <form className="search" >
                    <label>Smoking?<input type="checkbox" /></label>
                    <label>Special Needs?<input type="checkbox" /></label>
                    <label>Female?<input name="gender" value="female" type="radio" /></label>
                    <label>Male?<input name="gender" value="male" type="radio" /></label>
                    <label>No Preference?<input name="gender" value="none" type="radio" /></label>
                    <label>Number of Kids? <input type="number" min="1" max="10" /></label>
                </form>

                <MatchList />
            </div>
        );
    }
}

export default SearchForm;

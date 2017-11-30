import React, { Component } from 'react';
import { connect } from 'react-redux';
import { next } from '../actions';

class NextBtn extends Component {
	render() {
		return (
			<button type="button" className="NextButton">&gt;
			</button>
		);
	}
}

export default NextBtn;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { next } from '../actions';

class NextBtn extends Component {
	render() {
		return(
			<button type="button"  className="NextButton">&gt;
			</button>
		);
	}
}

// disabled={this.props.disabled}

// function mapStateToProps(state) {
// 	return {
// 		disabled: state.currentCardIndex >= state.matches.length - 1
// 	}
// }


export default NextBtn;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { next } from '../actions';

class NextBtn extends Component {
	render() {
		return(
			<button type="button" onClick={this.props.next} disabled={this.props.disabled} className="NextButton">&gt;
			</button>
		);
	}
}

function mapStateToProps(state) {
	return {
		disabled: state.currentCardIndex >= state.matches.length - 1
	}
}

const mapActionsToProps = {
	next: next
}

export default connect(mapStateToProps, mapActionsToProps)(NextBtn);
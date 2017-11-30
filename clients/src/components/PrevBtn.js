import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prev } from '../actions';

class PrevBtn extends Component {
	render() {
		return(
			<button type="button" onClick={this.props.prev} disabled={this.props.disabled} className="PrevButton">&lt;
			</button>
		);
	}
}

function mapStateToProps(state) {
	return {
		disabled: state.currentCardIndex <= 0
	}
}

const mapActionsToProps = {
	prev: prev
}

export default connect(mapStateToProps, mapActionsToProps)(PrevBtn);
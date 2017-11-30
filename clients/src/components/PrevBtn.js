import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prev } from '../actions';

class PrevBtn extends Component {
	render() {
		return(
			<button type="button" onClick={this.props.prev} className="PrevButton">&lt;
			</button>
		);
	}
}

const mapActionsToProps = {
	prev: prev
}

export default connect(null, mapActionsToProps)(PrevBtn);
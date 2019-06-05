import React from 'react';
import Editor from './Board';
import { connect, bindActionCreators } from 'react-redux';
import * as actions from './actions';

const mapStateToProps = (state) => {
	return {
		example: state.example
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateLineHeight: (id, height) => {dispatch(actions.updateLineHeight(id, height))}
	}
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Board);

export default Container;
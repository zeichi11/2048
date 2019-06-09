import React from 'react';
import Board from './components/Board';
import { connect, bindActionCreators } from 'react-redux';
import * as actions from './actions';

const mapStateToProps = (state) => {
	return {
		board: state.board
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateRow: (index, rowArray) => {dispatch(actions.updateRow(index, rowArray))},
		updateColumn: (index, colArray) => {dispatch(actions.updateColumn(id, colArray))},
		addBlock: (row, column, value) => {dispatch(actions.addBlock(row, column, value))}
	}
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Board);

export default Container;
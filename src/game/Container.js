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
		updateBoard: (board) => {dispatch(actions.updateBoard(board))},
		addBlock: (row, column, value) => {dispatch(actions.addBlock(row, column, value))}
	}
};

const Container = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Board);

export default Container;
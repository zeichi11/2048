import Constants from '../common/Constants';

export function addBlock(row, column, value) {
	return {
		type: Constants.action.ADD_BLOCK,
		row: row,
		column: column,
		value: value
	};
}

export function updateBoard(board) {
	return {
		type: Constants.action.UPDATE_BOARD,
		value: board
	};
}
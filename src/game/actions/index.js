import Constants from '../common/Constants';

export function updateRowLine(index, rowArray) {
	return {
		type: Constants.action.UPDATE_ROW,
		index: index,
		value: rowArray
	};
}

export function updateColumnLine(index, colArray) {
	return {
		type: Constants.action.UPDATE_COLUMN,
		index: index,
		value: colArray
	};
}

export function addBlock(row, column, value) {
	return {
		type: Constants.action.ADD_BLOCK,
		row: row,
		column: column,
		value: value
	};
}
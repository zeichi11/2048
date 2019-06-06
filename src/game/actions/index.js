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
		type: Constants.action.UPDATE_ROW,
		index: index,
		value: colArray
	};
}
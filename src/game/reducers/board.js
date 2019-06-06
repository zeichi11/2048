import Constants from '../common/Constants';

// 초기 state
let initialState;
const setInitialState = function (rowCount, colCount) {
	let boardState = [],
		colArray = [],
		i, j;

	for (i = 0; i < rowCount; i++) {
		for (j = 0; j < colCount; j++) {
			colArray.push(0);
		}
		boardState.push(colArray);
	}

	return boardState;
};

export default function board(state = initialState, action) {
	if (typeof state === 'undefined' || state === null) {
		if (typeof initialState === 'undefined') {
			initialState = setInitialState(Constants.constants.TR_COUNT, Constants.constants.TD_COUNT);
		}

		state = initialState;
	}

	switch (action.type) {
		case Constants.action.UPDATE_ROW:
			return {
				state
			};
		case Constants.action.UPDATE_COLUMN:
			return {
				state
			};
		default:
			return state;
	}
};
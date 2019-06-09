import Constants from '../common/Constants';
import Utils from '../common/Utils';

// 초기 state
let initialState;
const setInitialState = function (rowCount, colCount) {
	let boardState = [],
		colArray,
		firstBlockIndex,
		firstBlockValue,
		i, j;

	for (i = 0; i < rowCount; i++) {
		colArray = [];
		for (j = 0; j < colCount; j++) {
			colArray.push(0);
		}
		boardState.push(colArray);
	}

	firstBlockIndex = Utils.createIndexRandomly(Constants.constants.TR_COUNT, Constants.constants.TD_COUNT);
	firstBlockValue = Utils.createBlockValue(Constants.constants.TR_COUNT / 2);
	boardState[firstBlockIndex[0]][firstBlockIndex[1]] = firstBlockValue;

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
		case Constants.action.ADD_BLOCK:
			return state.map((rowBlock, i) => {
				if (i === action.row) {
					rowBlock[action.column] = action.value;
				}

				return rowBlock;
			});
		default:
			return state;
	}
};
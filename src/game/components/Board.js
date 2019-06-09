import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import Block from './Block';
import Table from './Table';
import Constants from '../common/Constants.js'
import Utils from '../common/Utils.js'

class Board extends Component {
	constructor(props) {
		super(props);
		this.Initialized = false;
		this.createBlockRandomly = this.createBlockRandomly.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		document.addEventListener('keydown', this.handleKeyDown);
	}

	/**
	 * create new block randomly
	 */
	createBlockRandomly() {
		const TR_COUNT = Constants.constants.TR_COUNT;
		const TD_COUNT = Constants.constants.TD_COUNT;
		const BOARD_STATE = this.props.board;
		let rowIndex = 0,
			columnIndex = 0,
			count = 0,
			findEmptyIndex = false,
			value;

		while (!findEmptyIndex) {
			if (count > (TR_COUNT * TD_COUNT)) {
				break;
			}
			rowIndex = Math.floor(Math.random() * TR_COUNT);
			columnIndex = Math.floor(Math.random() * TD_COUNT);

			if (BOARD_STATE[rowIndex][columnIndex] === 0) {
				findEmptyIndex = true;
			}

			count++;
		}

		value = (Math.floor(Math.random() * (TR_COUNT / 2)) + 1) * 2;
		this.props.addBlock(rowIndex, columnIndex, value);
	}

	/**
	 *
	 */
	componentDidMount() {

	}

	handleKeyDown(e) {
		let TR_COUNT = Constants.constants.TR_COUNT,
			TD_COUNT = Constants.constants.TD_COUNT,
			newBoardState = Utils.cloneBoard(this.props.board),
			keyCode = e.keyCode,
			index,
			newValue,
			isSameState,
			i, j;

		if (!(Constants.constants.KEY_CODE_LEFT || Constants.constants.KEY_CODE_UP ||
			Constants.constants.KEY_CODE_RIGHT || Constants.constants.KEY_CODE_DOWN)) {
			return;
		}

		switch (keyCode) {
			case Constants.constants.KEY_CODE_LEFT:
				for (i = 0; i < TR_COUNT; i++) {
					index = 0;
					for (j = 0; j < TD_COUNT; j++) {
						if (newBoardState[i][j] === 0) {
							continue;
						}

						if (index > 0 && (newBoardState[i][index - 1] === newBoardState[i][j])) {
							newValue = newBoardState[i][j] + newBoardState[i][index - 1];
							newBoardState[i][index - 1] = newValue;
							newBoardState[i][j] = 0;

						} else {
							newValue = newBoardState[i][j];
							newBoardState[i][index] = newValue;
							if (j !== index) {
								newBoardState[i][j] = 0;
							}

							index++;
						}
					}
				}
				break;

			case Constants.constants.KEY_CODE_UP:
				for (i = 0; i < TD_COUNT; i++) {
					index = 0;
					for (j = 0; j < TR_COUNT; j++) {
						if (newBoardState[j][i] === 0) {
							continue;
						}

						if (index > 0 && (newBoardState[index - 1][i] === newBoardState[j][i])) {
							newValue = newBoardState[j][i] + newBoardState[index - 1][i];
							newBoardState[index - 1][i] = newValue;
							newBoardState[j][i] = 0;

						} else {
							newValue = newBoardState[j][i];
							newBoardState[index][i] = newValue;
							if (j !== index) {
								newBoardState[j][i] = 0;
							}

							index++;
						}
					}
				}
				break;

			case Constants.constants.KEY_CODE_RIGHT:
				for (i = 0; i < TR_COUNT; i++) {
					index = TD_COUNT - 1;

					for (j = TD_COUNT - 1; j >= 0; j--) {
						if (newBoardState[i][j] === 0) {
							continue;
						}

						if (index < TD_COUNT - 1 && (newBoardState[i][index + 1] === newBoardState[i][j])) {
							newValue = newBoardState[i][j] + newBoardState[i][index + 1];
							newBoardState[i][index + 1] = newValue;
							newBoardState[i][j] = 0;

						} else {
							newValue = newBoardState[i][j];
							newBoardState[i][index] = newValue;
							if (j !== index) {
								newBoardState[i][j] = 0;
							}

							index--;
						}
					}
				}
				break;

			case Constants.constants.KEY_CODE_DOWN:
				for (i = 0; i < TD_COUNT; i++) {
					index = TR_COUNT - 1;

					for (j = TR_COUNT - 1; j >= 0; j--) {
						if (newBoardState[j][i] === 0) {
							continue;
						}

						if (index < TR_COUNT - 1 && (newBoardState[index + 1][i] === newBoardState[j][i])) {
							newValue = newBoardState[j][i] + newBoardState[index + 1][i];
							newBoardState[index + 1][i] = newValue;
							newBoardState[j][i] = 0;

						} else {
							newValue = newBoardState[j][i];
							newBoardState[index][i] = newValue;
							if (j !== index) {
								newBoardState[j][i] = 0;
							}

							index--;
						}
					}
				}
				break;
		}

		isSameState = Utils.compareArrays(this.props.board, newBoardState);

		// If two boards are not same then update board and create a Block randomly.
		if (!isSameState) {
			this.props.updateBoard(newBoardState);
			this.createBlockRandomly();
		}
	}

	/**
	 * render Component
	 * @returns {XML}
	 */
	render() {
		const getWidth = () => {
			return 500;
		};
		const getHeight = () => {
			return 500;
		};

		let width = getWidth(),
			height = getHeight();

		return (
			<div style={{'width': '100%'}}>
				<div style={{'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)'}}>
					<Table
						board={this.props.board}
						width={width}
						height={height}
					/>
					<Block
						board={this.props.board}
						width={width}
						height={height}
					/>
				</div>
			</div>

		)
	}
}

export default Board;
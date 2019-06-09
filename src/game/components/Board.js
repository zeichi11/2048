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
			findEmptyIndex = false,
			value;

		while (!findEmptyIndex) {
			rowIndex = Math.floor(Math.random() * TR_COUNT);
			columnIndex = Math.floor(Math.random() * TD_COUNT);

			if (BOARD_STATE[rowIndex][columnIndex] === 0) {
				findEmptyIndex = true;
			}
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
			newBoardState = Utils.cloneArray(this.props.board),
			keyCode = e.keyCode;

		switch (keyCode) {
			case Constants.constants.KEY_CODE_LEFT:
				break;
			case Constants.constants.KEY_CODE_UP:
				break;
			case Constants.constants.KEY_CODE_RIGHT:
				break;
			case Constants.constants.KEY_CODE_DOWN:
				break;
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
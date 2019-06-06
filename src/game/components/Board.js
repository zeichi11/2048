import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import Block from './Block';
import Table from './Table';

class Board extends Component {
	constructor(props) {
		super(props);
	}

	/**
	 *
	 * @param {object} e
	 */
	handleMouseDown(e) {
		console.log('-- mouse dpwn --');
		console.log(e.target);
	}

	/**
	 *
	 * @param {object} e
	 */
	handleMouseMove(e) {
		console.log('-- mouse move --');
		console.log(e.target);
	}

	/**
	 * mouse up event handler
	 * @param {object} e
	 */
	handleMouseUp(e) {
		console.log('-- mouse up --');
		console.log(e.target);
	}

	/**
	 * render Component
	 * @returns {XML}
	 */
	render() {
		let width,
			height,
			getInlineStyle = function () {
				return {
					width: width,
					height: height
				};
			};

		const GRID_LINE_WIDTH = 5;
		const getWidth = function () {
			// window 사이즈로 계산 필요
			let width = 500;
			return width;
		};
		const getHeight = function () {
			// window 사이즈로 계싼 필요
			let height = 500;
			return height;
		};
		const renderBlocks = (board) => {
			let blockState = board.block;
			return blockState.map((block, i) => {
				return (
					<Block/>
				);
			})
		};

		return (
			<div>
				<Table board={this.props.board}/>
			</div>

		)
	}
}

export default Board;
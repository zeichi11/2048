import React, { Component } from 'react';
import Editor from './Block';
import { connect, bindActionCreators } from 'react-redux';

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
				<div>
					{renderBlocks(this.props.board)}
				</div>
			</div>
		)
	}
}

export default Board;
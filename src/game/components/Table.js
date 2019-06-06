import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import TableRow from './TableRow';
import Constants from '../common/Constants';

class Table extends Component {
	constructor(props) {
		super(props);
	}

	/**
	 * render Component
	 * @returns {XML}
	 */
	render() {
		const GRID_LINE_WIDTH = 5;
		let width,
			height,
			getInlineStyle = function () {
				return {
					'width': width + 'px',
					'height': height + 'px'
				};
			};

		/**
		 *
		 * @param {array} board
		 */
		const createRowBlock = function (board) {
			if (typeof board === 'undefined' || board === null) {
				return;
			}
			return board.map((columns, i) => {
				return (
					<TableRow
						key={i}
						columns={columns}
					/>
				);
			});
		};

		return (
			<table>
				<tbody>
					{createRowBlock(this.props.board)}
				</tbody>
			</table>

		)
	}
}

export default Table;
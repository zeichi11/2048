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
		const GRID_LINE_WIDTH = Constants.constants.GRID_LINE_WIDTH;
		let getInlineStyle = function (width, height) {
				return {
					'width': width + 'px',
					'height': height + 'px',
					'border': '2px solid #f7e19b',
					'borderRadius': '10px 10px 10px 10px',
					'backgroundColor': '#ffefbc'
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
			<table style={getInlineStyle(this.props.width, this.props.height)}
				   cellSpacing={GRID_LINE_WIDTH + 'px'}>
				<tbody>
					{createRowBlock(this.props.board)}
				</tbody>
			</table>
		);
	}
}

export default Table;
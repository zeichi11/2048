import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import Constants from '../common/Constants';

class TableRow extends Component {
	constructor(props) {
		super(props);
	}

	/**
	 * render Component
	 * @returns {XML}
	 */
	render() {
		const renderColumns = function (columns) {
			return columns.map((column, i) => {
				return (
					<td key={i}></td>
				);
			});
		};

		return(
			<tr>
				{renderColumns(this.props.columns)}
			</tr>
		);
	}
}

export default TableRow;